import React, { useState, useEffect } from 'react';
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
    Spinner
} from '@chakra-ui/react';
import { FaFileAlt, FaFolder } from 'react-icons/fa';
import { AddIcon, SettingsIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import RobotImage from '../assets/robot.jpg'; // Import the background image

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

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
        <Box
            bgImage={`url(${RobotImage})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            minH="100vh"
            position="relative"
        >
            <Box position="absolute" top={0} left={0} w="full" h="full" bg="rgba(255, 255, 255, 0.8)" zIndex={1}></Box>
            <Box position="relative" zIndex={2}>
                <Navbar />
                <Flex className="min-h-screen" direction="column">
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
                            className="animate-fadeInLeft"
                        >
                            {/* User Profile */}
                            <Flex align="center" mb={8} className="animate-fadeInDown">
                                <Avatar name="User Name" src="https://via.placeholder.com/150" mr={4} />
                                <span>User Name</span>
                            </Flex>
                            {/* Projects Section */}
                            <Box mb={8}>
                                <Heading as="h2" size="md" mb={4} className="animate-fadeInRight">
                                    Projects
                                </Heading>
                                <VStack align="start" spacing={4}>
                                    {projects.map((project, index) => (
                                        <Box key={index} w="full" className="animate-fadeIn">
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
                            <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid" className="animate-fadeInUp">
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
                            boxShadow="lg"
                        >
                            {/* Header */}
                            <Flex justify="space-between" align="center" mb={4} className="animate-fadeInDown">
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
                                bgImage={`url(${RobotImage})`}
                                bgSize="cover"
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                p={4}
                                mb={4}
                                rounded="lg"
                                overflowY="auto"
                                className="chat-window animate-fadeIn"
                                boxShadow="lg"
                            >
                                {loading ? (
                                    <Flex justify="center" align="center" h="full">
                                        <Spinner size="xl" color="teal.500" />
                                    </Flex>
                                ) : (
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
                                )}
                            </Box>
                            {/* Input Area */}
                            <Flex align="center" className="animate-fadeInUp">
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
            </Box>

            {/* Styles */}
            <style jsx>{`
                .animate-fadeInLeft {
                    animation: fadeInLeft 1s ease-in-out;
                }
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-100%); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .animate-fadeInDown {
                    animation: fadeInDown 1s ease-in-out;
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-100%); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeInRight {
                    animation: fadeInRight 1s ease-in-out;
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(100%); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-in-out;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(100%); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 1.5s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </Box>
    );
};

export default ChatInterface;
