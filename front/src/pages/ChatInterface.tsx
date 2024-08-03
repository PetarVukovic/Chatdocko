import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Input,
    useColorMode,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { FaFileAlt, FaFolder } from 'react-icons/fa';
import { AddIcon, SettingsIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';

const ChatInterface: React.FC = () => {
    const { colorMode } = useColorMode();
    const sidebarBg = useColorModeValue('#F5F5F5', '#2C2C2C');
    const mainBg = useColorModeValue('white', '#1A202C');
    const [projects, setProjects] = useState([
        {
            name: 'Project 1',
            files: ['Document 1', 'Document 2'],
            isOpen: false,
        },
        {
            name: 'Project 2',
            files: ['Document 3', 'Document 4'],
            isOpen: false,
        },
    ]);
    const [chatMessages, setChatMessages] = useState([
        { sender: 'AI Agent', text: 'Hello, how can I help you?' },
        { sender: 'User', text: 'I need help with my document.' },
    ]);

    const toggleProject = (index: number) => {
        setProjects((prevProjects) => {
            const newProjects = [...prevProjects];
            newProjects[index].isOpen = !newProjects[index].isOpen;
            return newProjects;
        });
    };

    const handleFileUpload = (
        event: React.ChangeEvent<HTMLInputElement>,
        projectIndex: number
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            setProjects((prevProjects) => {
                const newProjects = [...prevProjects];
                newProjects[projectIndex].files.push(file.name);
                return newProjects;
            });
        }
    };

    return (
        <Flex className="min-h-screen" direction="column">
            <Navbar />
            <Flex flex="1" direction="row">
                {/* Sidebar */}
                <Box
                    w="20%"
                    p={4}
                    bg={sidebarBg}
                    position="fixed"
                    top="64px"
                    left="0"
                    bottom="0"
                    overflowY="auto"
                >
                    {/* User Profile */}
                    <Flex align="center" mb={8}>
                        <Avatar name="User Name" src="https://via.placeholder.com/150" mr={4} />
                        <span>User Name</span>
                    </Flex>
                    {/* Projects Section */}
                    <Box mb={8}>
                        <Heading as="h2" size="md" mb={4}>
                            Projects
                        </Heading>
                        <VStack align="start" spacing={4}>
                            {projects.map((project, index) => (
                                <Box key={index} w="full">
                                    <Flex
                                        align="center"
                                        cursor="pointer"
                                        onClick={() => toggleProject(index)}
                                    >
                                        <FaFolder className="mr-2" /> {project.name}
                                    </Flex>
                                    {project.isOpen && (
                                        <Box ml={6} mt={2}>
                                            <VStack align="start" spacing={2}>
                                                {project.files.map((file, fileIndex) => (
                                                    <Flex key={fileIndex} align="center">
                                                        <FaFileAlt className="mr-2" /> {file}
                                                    </Flex>
                                                ))}
                                                <Button
                                                    leftIcon={<AddIcon />}
                                                    colorScheme="teal"
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        document.getElementById(`fileInput-${index}`)?.click()
                                                    }
                                                >
                                                    Upload File
                                                </Button>
                                                <input
                                                    type="file"
                                                    id={`fileInput-${index}`}
                                                    style={{ display: 'none' }}
                                                    onChange={(event) => handleFileUpload(event, index)}
                                                />
                                            </VStack>
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </VStack>
                    </Box>
                    {/* New Project Button */}
                    <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                        New Project
                    </Button>
                </Box>

                {/* Main Chat Area */}
                <Box
                    flex="1"
                    p={4}
                    ml="20%"
                    bg={mainBg}
                    display="flex"
                    flexDirection="column"
                    height="calc(100vh - 64px)"
                >
                    {/* Header */}
                    <Flex justify="space-between" align="center" mb={4}>
                        <Heading as="h2" size="lg">
                            Selected Project
                        </Heading>
                        <Button leftIcon={<SettingsIcon />} colorScheme="teal" variant="outline">
                            Options
                        </Button>
                    </Flex>
                    {/* Chat Window */}
                    <Box
                        flex="1"
                        bg="gray.100"
                        p={4}
                        mb={4}
                        rounded="lg"
                        overflowY="auto"
                        className="chat-window"
                    >
                        <VStack align="stretch" spacing={4}>
                            {chatMessages.map((msg, index) => (
                                <Box
                                    key={index}
                                    bg={msg.sender === 'AI Agent' ? 'blue.200' : 'green.200'}
                                    p={2}
                                    rounded="lg"
                                    alignSelf={msg.sender === 'AI Agent' ? 'flex-start' : 'flex-end'}
                                >
                                    {msg.sender}: {msg.text}
                                </Box>
                            ))}
                        </VStack>
                    </Box>
                    {/* Input Area */}
                    <Flex align="center">
                        <Input placeholder="Type your message..." mr={4} />
                        <Button colorScheme="teal" variant="solid">
                            Send
                        </Button>
                        <Button colorScheme="teal" variant="outline" ml={2}>
                            Upload
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ChatInterface;
