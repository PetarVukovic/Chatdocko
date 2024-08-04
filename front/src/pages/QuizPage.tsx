import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Input, useColorModeValue, VStack, Text, Spinner } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import RobotImage from '../assets/robot.jpg'; // Import the background image

const QuizPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [quiz, setQuiz] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const bgColor = useColorModeValue('gray.100', 'gray.900');
    const boxColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const quizBgColor = useColorModeValue('gray.200', 'gray.700');

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const generateQuiz = async () => {
        if (selectedFile) {
            setQuiz("This is a generated quiz based on the uploaded PDF content.");
        }
    };

    if (loading) {
        return (
            <Box className="min-h-screen flex items-center justify-center">
                <Spinner size="xl" color="teal.500" />
            </Box>
        );
    }

    return (
        <>
            <Navbar />
            <Box
                bg={bgColor}
                p={12}
                minH="85vh"
                bgImage={`url(${RobotImage})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                position="relative"
            >
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="rgba(255, 255, 255, 0.8)" zIndex={1}></Box>
                <Box position="relative" zIndex={2} bg={boxColor} p={6} rounded="lg" shadow="lg">
                    <Heading as="h1" size="2xl" mb={6} color={textColor} textAlign="center">
                        Quiz Generator
                    </Heading>
                    <VStack spacing={4} align="center">
                        <Input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileUpload}
                            hidden
                            id="pdf-upload"
                        />
                        <Button
                            leftIcon={<FaUpload />}
                            colorScheme="teal"
                            onClick={() => document.getElementById('pdf-upload')?.click()}
                        >
                            Upload PDF
                        </Button>
                        <Button
                            colorScheme="teal"
                            onClick={generateQuiz}
                            isDisabled={!selectedFile}
                        >
                            Generate Quiz
                        </Button>
                    </VStack>
                    {quiz && (
                        <Box mt={6} p={4} bg={quizBgColor} rounded="md">
                            <Text>{quiz}</Text>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default QuizPage;
