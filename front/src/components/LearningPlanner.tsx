import React, { useState } from 'react';
import { Box, Button, Heading, Input, VStack, Textarea, Flex } from '@chakra-ui/react';
import PomodoroTimer from './PomodoroTimer';

interface Task {
    name: string;
    description: string;
    date: string;
    time: string;
    completedPomodoros: number;
}

export const LearningPlanner: React.FC<{
    onPomodoroComplete: (minutes: number) => void;
}> = ({ onPomodoroComplete }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<Task>({
        name: '',
        description: '',
        date: '',
        time: '',
        completedPomodoros: 0,
    });
    const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleAddTask = () => {
        if (task.name && task.date && task.time) {
            setTasks([...tasks, { ...task }]);
            setTask({ name: '', description: '', date: '', time: '', completedPomodoros: 0 });
        }
    };

    const handlePomodoroComplete = () => {
        if (selectedTaskIndex !== null) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                updatedTasks[selectedTaskIndex].completedPomodoros += 1;
                return updatedTasks;
            });
            onPomodoroComplete(25); // Assuming each Pomodoro session is 25 minutes
        }
    };

    return (
        <Box p={4}>
            <VStack spacing={4} align="start">
                <Input
                    placeholder="Task Name"
                    name="name"
                    value={task.name}
                    onChange={handleChange}
                    size="md"
                />
                <Textarea
                    placeholder="Task Description"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    size="md"
                />
                <Flex w="full" justifyContent="space-between" spacing={4}>
                    <Input
                        type="date"
                        name="date"
                        value={task.date}
                        onChange={handleChange}
                        size="md"
                        w="48%"
                    />
                    <Input
                        type="time"
                        name="time"
                        value={task.time}
                        onChange={handleChange}
                        size="md"
                        w="48%"
                    />
                </Flex>
                <Button
                    colorScheme="teal"
                    onClick={handleAddTask}
                    isDisabled={!task.name || !task.date || !task.time}
                >
                    Add Task
                </Button>
            </VStack>
            <Box mt={8}>
                <Heading size="lg" mb={4}>Planned Tasks</Heading>
                <VStack spacing={4}>
                    {tasks.map((task, index) => (
                        <Box
                            key={index}
                            p={4}
                            borderWidth={1}
                            borderRadius="md"
                            shadow="md"
                            w="full"
                            onClick={() => setSelectedTaskIndex(index)}
                            cursor="pointer"
                            bg={selectedTaskIndex === index ? 'teal.50' : 'white'}
                        >
                            <Heading size="md">{task.name}</Heading>
                            <Box>{task.description}</Box>
                            <Box>
                                {task.date} at {task.time}
                            </Box>
                            <Box>Completed Pomodoros: {task.completedPomodoros}</Box>
                        </Box>
                    ))}
                </VStack>
            </Box>
            {selectedTaskIndex !== null && (
                <Box mt={8}>
                    <Heading size="md" mb={4}>Pomodoro Timer for: {tasks[selectedTaskIndex].name}</Heading>
                    <PomodoroTimer onSessionComplete={handlePomodoroComplete} />
                </Box>
            )}
        </Box>
    );
};
