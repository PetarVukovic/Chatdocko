import React, { useState } from 'react';
import { Box, Button, Heading, Input, useColorModeValue, VStack, Text } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const QuizPage: React.FC = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [quiz, setQuiz] = useState<string | null>(null);

    // Always call hooks at the top level
    const bgColor = useColorModeValue('gray.100', 'gray.900');
    const boxColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const quizBgColor = useColorModeValue('gray.200', 'gray.700'); // Call this hook at the top

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const generateQuiz = async () => {
        if (selectedFile) {
            // Mocked OpenAI API call for quiz generation
            setQuiz("This is a generated quiz based on the uploaded PDF content.");
        }
    };

    return (
        <>
            <Navbar />
            <Box bg={bgColor} p={12} minH="85vh">

                <Box bg={boxColor} p={6} rounded="lg" shadow="md">

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
