import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const PomodoroTimer: React.FC<{ onSessionComplete: () => void }> = ({ onSessionComplete }) => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        setIsActive(false);
                        clearInterval(interval!);
                        onSessionComplete(); // Notify parent component
                        return 25 * 60; // Reset to 25 minutes
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (!isActive && timeLeft !== 0) {
            clearInterval(interval!);
        }
        return () => clearInterval(interval!);
    }, [isActive, timeLeft, onSessionComplete]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <Box>
            <Text fontSize="2xl">{formatTime(timeLeft)}</Text>
            <Button colorScheme="teal" onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Pause' : 'Start'}
            </Button>
            <Button ml={4} onClick={() => setTimeLeft(25 * 60)}>
                Reset
            </Button>
        </Box>
    );
};

export default PomodoroTimer;
