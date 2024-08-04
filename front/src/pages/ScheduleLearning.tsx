import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Heading, Flex, useColorModeValue, Text, Spinner } from '@chakra-ui/react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import { LearningPlanner } from '../components/LearningPlanner';
import RobotImage from '../assets/robot.jpg'; // Import the background image
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export default function ScheduleLearning() {
    const bgColor = useColorModeValue('gray.100', 'gray.900');
    const boxColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const [hoveredEvent, setHoveredEvent] = useState<{ title: string; description: string } | null>(null);
    const [loading, setLoading] = useState(true);

    const [studySessions, setStudySessions] = useState<number[]>([]);
    const [breakSessions, setBreakSessions] = useState<number[]>([]);

    const events = [
        { title: 'Math Study', start: '2024-08-10T10:00:00', end: '2024-08-10T12:00:00', description: 'Study for Math exam' },
        { title: 'Science Project', start: '2024-08-12T14:00:00', end: '2024-08-12T17:00:00', description: 'Complete science project' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const effortData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Study Hours',
                data: studySessions,
                fill: true,
                backgroundColor: 'rgba(56, 161, 169, 0.2)',
                borderColor: 'rgba(56, 161, 169, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(56, 161, 169, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(56, 161, 169, 1)',
            },
        ],
    };

    const taskCompletionData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Tasks Completed',
                data: [3, 5, 2, 4],
                backgroundColor: 'rgba(90, 100, 200, 0.5)',
                borderColor: 'rgba(90, 100, 200, 1)',
                borderWidth: 1,
            },
        ],
    };

    const activityDistributionData = {
        labels: ['Study', 'Rest', 'Extracurricular'],
        datasets: [
            {
                label: 'Activity Distribution',
                data: [
                    studySessions.reduce((a, b) => a + b, 0),
                    breakSessions.reduce((a, b) => a + b, 0),
                    10
                ],
                backgroundColor: ['#38A1A9', '#90CDF4', '#FFD700'],
                borderColor: ['#38A1A9', '#90CDF4', '#FFD700'],
                borderWidth: 1,
            },
        ],
    };

    const handleEventMouseEnter = (info: any) => {
        setHoveredEvent({ title: info.event.title, description: info.event.extendedProps.description });
    };

    const handleEventMouseLeave = () => {
        setHoveredEvent(null);
    };

    const handlePomodoroComplete = (minutes: number) => {
        setStudySessions((prev) => [...prev, minutes]);
    };

    if (loading) {
        return (
            <Box className="min-h-screen flex items-center justify-center">
                <Spinner size="xl" color="teal.500" />
            </Box>
        );
    }

    return (
        <Box
            minH="100vh"
            bgImage={`url(${RobotImage})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
        >
            <Box position="absolute" top={0} left={0} w="full" h="full" bg="rgba(255, 255, 255, 0.8)" zIndex={1}></Box>
            <Box position="relative" zIndex={2}>
                <Navbar />
                <Box p={4} mt="64px">
                    <Heading as="h1" size="2xl" mb={6} color={textColor}>
                        Dashboard
                    </Heading>
                    <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                        <Box
                            bg={boxColor}
                            p={6}
                            rounded="lg"
                            shadow="lg"
                            flex="1"
                            mr={{ lg: 4 }}
                            mb={{ base: 4, lg: 0 }}
                        >
                            <Heading as="h2" size="lg" mb={4} color={textColor}>
                                Learning Planner
                            </Heading>
                            <LearningPlanner onPomodoroComplete={handlePomodoroComplete} />
                        </Box>
                        <Box
                            bg={boxColor}
                            p={6}
                            rounded="lg"
                            shadow="lg"
                            flex="1"
                        >
                            <Heading as="h2" size="lg" mb={4} color={textColor}>
                                Time Distribution
                            </Heading>
                            <Flex justify="center">
                                <Box w="full" maxW="lg">
                                    <Doughnut data={activityDistributionData} />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                        <Box
                            bg={boxColor}
                            p={6}
                            rounded="lg"
                            shadow="lg"
                            flex="1"
                            mr={{ lg: 4 }}
                            mb={{ base: 4, lg: 0 }}
                        >
                            <Heading as="h2" size="lg" mb={4} color={textColor}>
                                Study Hours Over Time
                            </Heading>
                            <Flex justify="center">
                                <Box w="full" maxW="lg">
                                    <Line data={effortData} />
                                </Box>
                            </Flex>
                        </Box>
                        <Box
                            bg={boxColor}
                            p={6}
                            rounded="lg"
                            shadow="lg"
                            flex="1"
                        >
                            <Heading as="h2" size="lg" mb={4} color={textColor}>
                                Tasks Completed
                            </Heading>
                            <Flex justify="center">
                                <Box w="full" maxW="lg">
                                    <Bar data={taskCompletionData} />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box
                        bg={boxColor}
                        p={6}
                        rounded="lg"
                        shadow="lg"
                    >
                        <Heading as="h2" size="lg" mb={4} color={textColor}>
                            Calendar
                        </Heading>
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="timeGridWeek"
                            events={events}
                            height="auto"
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay',
                            }}
                            eventColor="teal"
                            eventMouseEnter={handleEventMouseEnter}
                            eventMouseLeave={handleEventMouseLeave}
                        />
                        {hoveredEvent && (
                            <Box mt={2} p={2} bg="teal.500" color="white" rounded="md">
                                <Text><strong>{hoveredEvent.title}</strong>: {hoveredEvent.description}</Text>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
