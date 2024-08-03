import React, { useState } from 'react';
import { Box, Button, Input, Textarea, VStack, Flex, Heading } from '@chakra-ui/react';

export type Props = {};

interface Task {
    name: string;
    description: string;
    date: string;
    time: string;
}

export const LearningPlanner: React.FC<Props> = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<Task>({
        name: '',
        description: '',
        date: '',
        time: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleAddTask = () => {
        if (task.name && task.date && task.time) {
            setTasks([...tasks, task]);
            setTask({ name: '', description: '', date: '', time: '' });
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
                        >
                            <Heading size="md">{task.name}</Heading>
                            <Box>{task.description}</Box>
                            <Box>
                                {task.date} at {task.time}
                            </Box>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
};
