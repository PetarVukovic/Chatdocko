import React from 'react';
import { Box, Button, Flex, Heading, Stack, Text, VStack, IconButton, useColorMode, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaCog, FaHammer, FaMagic } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Pricing from '../components/Pricing'; // Import the Pricing component

const Home: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box className="min-h-screen" bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}>
            {/* Header */}
            <Box bg={colorMode === 'light' ? 'white' : 'gray.800'} shadow="sm">
                <Flex
                    className="container mx-auto py-4 px-6"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Heading size="lg" className={colorMode === 'light' ? 'text-teal-500' : 'text-teal-200'}>
                        ChatDocko AI
                    </Heading>
                    <Stack direction="row" spacing={4} alignItems="center">
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">Features</Button>
                        <Button variant="ghost">Contact</Button>
                        <Link to="/chat"><Button colorScheme="teal">Get Started</Button></Link>
                        <IconButton
                            aria-label="Toggle dark mode"
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            onClick={toggleColorMode}
                        />
                    </Stack>
                </Flex>
            </Box>

            {/* Main Section */}
            <Box className="container mx-auto py-16 px-6">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <VStack
                        alignItems="start"
                        spacing={6}
                        maxW="lg"
                        className="3d-effect text-container"
                    >
                        <Heading size="2xl" color={colorMode === 'light' ? 'gray.800' : 'white'}>
                            Welcome to ChatDocko AI
                        </Heading>
                        <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                            Connect with your textbooks, tests, and PDFs in a whole new way. ChatDocko AI offers a
                            seamless interface for students and teachers to interact with their educational materials.
                            Enhance your learning experience with AI-driven insights and interactive content.
                        </Text>
                        <Link to="/chat"><Button colorScheme="teal" size="lg">Get Started</Button></Link>
                    </VStack>
                    <Box
                        className="mt-8 md:mt-0"
                        maxW={{ base: 'full', md: '500px' }}
                        w="full"
                        bg="teal.500"
                        h="300px"
                        borderRadius="lg"
                    >
                        {/* Placeholder for an image or illustration */}
                    </Box>
                </Flex>
            </Box>

            {/* Features Section */}
            <Box
                className="py-16 px-6"
                style={{
                    background: 'linear-gradient(to right, #38a169, #90cdf4)', // Green to light blue gradient
                }}
            >
                <Box className="container mx-auto text-center">
                    <Heading size="xl" className="mb-6 text-white">
                        Key Features
                    </Heading>
                    <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
                        <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0">
                            <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <FaCog size={28} color="#38a169" />
                            </Box>
                            <Heading size="md" className="text-white">
                                Interactive AI Chat
                            </Heading>
                            <Text className="text-white">
                                Chat with your books and get answers to your questions in real-time.
                            </Text>
                        </VStack>
                        <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0">
                            <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <FaHammer size={28} color="#38a169" />
                            </Box>
                            <Heading size="md" className="text-white">
                                Seamless Integration
                            </Heading>
                            <Text className="text-white">
                                Easily upload and integrate your study materials, including tests and PDFs.
                            </Text>
                        </VStack>
                        <VStack spacing={4} maxW="xs">
                            <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <FaMagic size={28} color="#38a169" />
                            </Box>
                            <Heading size="md" className="text-white">
                                AI Insights
                            </Heading>
                            <Text className="text-white">
                                Leverage advanced AI to gain insights and enhance your learning journey.
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </Box>

            {/* What People Say Section */}
            <Box className="bg-gray-100 py-16 px-6">
                <Box className="container mx-auto text-center">
                    <Heading size="xl" className="mb-6 text-gray-800">
                        What People Say About Us
                    </Heading>
                    <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
                        <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0">
                            <Avatar size="xl" name="John Doe" src="https://bit.ly/dan-abramov" />
                            <Text fontWeight="bold">John Doe</Text>
                            <Text className="text-gray-600">"ChatDocko AI has transformed my study sessions. The AI chat feature is incredibly helpful and intuitive."</Text>
                        </VStack>
                        <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0">
                            <Avatar size="xl" name="Jane Smith" src="https://bit.ly/tioluwani-kolawole" />
                            <Text fontWeight="bold">Jane Smith</Text>
                            <Text className="text-gray-600">"I love how easy it is to upload and interact with my PDFs and tests. The integration is seamless."</Text>
                        </VStack>
                        <VStack spacing={4} maxW="xs">
                            <Avatar size="xl" name="Alice Johnson" src="https://bit.ly/kent-c-dodds" />
                            <Text fontWeight="bold">Alice Johnson</Text>
                            <Text className="text-gray-600">"The AI insights have provided a new perspective on my study materials. Highly recommend ChatDocko AI."</Text>
                        </VStack>
                    </Flex>
                </Box>
            </Box>

            {/* Pricing Section */}
            <Pricing />

            {/* Call to Action Section */}
            <Box className="bg-teal-500 py-16 px-6 text-white">
                <Box className="container mx-auto text-center">
                    <Heading size="xl" className="mb-6">
                        Ready to start?
                    </Heading>
                    <Text fontSize="lg" className="mb-8">
                        Sign up now and take your learning to the next level with ChatDocko AI.
                    </Text>
                    <Button size="lg" colorScheme="whiteAlpha">
                        Get Started
                    </Button>
                </Box>
            </Box>

            {/* Styles */}
            <style jsx>{`
        .3d-effect {
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .3d-effect:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
        </Box>
    );
};

export default Home;
