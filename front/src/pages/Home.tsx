import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Stack, Text, VStack, IconButton, Image, Avatar, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaCog, FaHammer, FaMagic } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CroatianFlag from '../assets/croatian-flag.png';
import EnglishFlag from '../assets/en-flag.png';
import RobotImage from '../assets/robot.jpg';
import 'tailwindcss/tailwind.css';
import Pricing from '../components/Pricing';

const Home: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { i18n, t } = useTranslation();
    const [loading, setLoading] = useState(true);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Box className="min-h-screen flex items-center justify-center">
                <Spinner size="xl" color="teal.500" />
            </Box>
        );
    }

    return (
        <Box className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 relative overflow-hidden">
            {/* Wave Background */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#90cdf4" fillOpacity="1" d="M0,192L40,181.3C80,171,160,149,240,165.3C320,181,400,235,480,245.3C560,256,640,224,720,213.3C800,203,880,213,960,213.3C1040,213,1120,203,1200,213.3C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </div>

            {/* Header */}
            <Box bg={colorMode === 'light' ? 'white' : 'gray.800'} shadow="sm" position="fixed" top="0" w="full" zIndex={10} className="animate-fadeIn">
                <Flex className="container mx-auto py-4 px-6" justifyContent="space-between" alignItems="center">
                    <Heading size="lg" color={colorMode === 'light' ? 'teal.500' : 'teal.200'}>
                        ChatDocko AI
                    </Heading>
                    <Stack direction="row" spacing={4} alignItems="center">
                        <Button variant="ghost">{t('home.home_button')}</Button>
                        <Button variant="ghost">{t('home.features_button')}</Button>
                        <Link to="/contact"><Button variant="ghost">{t('home.contact_button')}</Button></Link>
                        <Link to="/chat"><Button colorScheme="teal">{t('home.get_started')}</Button></Link>
                        <Link to="/login"><Button colorScheme="teal">{t('home.login')}</Button></Link>
                        <IconButton aria-label="Toggle dark mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
                        <IconButton aria-label="Switch to Croatian" icon={<Image src={CroatianFlag} alt="Croatian Flag" boxSize={6} />} onClick={() => changeLanguage('hr')} />
                        <IconButton aria-label="Switch to English" icon={<Image src={EnglishFlag} alt="English Flag" boxSize={6} />} onClick={() => changeLanguage('en')} />
                    </Stack>
                </Flex>
            </Box>

            {/* Main and Steps Section with Background */}
            <Box
                position="relative"
                bgImage={`url(${RobotImage})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                zIndex="1"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bg: 'rgba(173, 216, 230, 0.5)',
                    zIndex: '-1',
                    backdropFilter: 'blur(2px)',
                }}
            >
                {/* Welcome and Steps Section */}
                <Flex justifyContent="space-around" alignItems="center" mt={16} px={4}>
                    <Box
                        maxW="md"
                        w="full"
                        bg="rgba(255, 255, 255, 0.8)"
                        borderRadius="md"
                        p={6}
                        boxShadow="lg"
                        className="animate-slideInLeft"
                        zIndex="10"
                    >
                        <VStack alignItems="start" spacing={4}>
                            <Heading size="2xl" color={colorMode === 'light' ? 'gray.800' : 'gray.800'}>
                                {t('home.welcome')}
                            </Heading>
                            <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                                <b>Explore the future</b> with <b>ChatDocko AI</b>, a platform that empowers your learning experience with AI-driven insights and personalized content. Enhance your skills and knowledge with our intuitive features and user-friendly interface.
                            </Text>
                            <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                                Our AI platform offers <b>advanced features</b> like real-time chat assistance, document analysis, and more. Join us in revolutionizing the way you learn and grow.
                            </Text>
                            <Link to="/chat">
                                <Button colorScheme="teal" size="lg" className="animate-buttonMove">
                                    {t('home.get_started')}
                                </Button>
                            </Link>
                        </VStack>
                    </Box>

                    <Box
                        maxW="md"
                        w="full"
                        bg="rgba(255, 255, 255, 0.8)"
                        borderRadius="md"
                        p={6}
                        boxShadow="lg"
                        className="animate-slideInRight"
                        zIndex="10"
                    >
                        <Heading size="md" color={colorMode === 'light' ? 'gray.800' : 'gray.800'} mb={4}>
                            It's simple as this
                        </Heading>
                        <VStack spacing={4} alignItems="stretch">
                            <Box p={4} bg={colorMode === 'light' ? 'white' : 'gray.700'} borderRadius="md" shadow="sm">
                                <Heading size="sm" color={colorMode === 'light' ? 'gray.800' : 'gray.200'}>Step 1</Heading>
                                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>Register. Start for free, or choose our pro version.</Text>
                            </Box>
                            <Box p={4} bg={colorMode === 'light' ? 'white' : 'gray.700'} borderRadius="md" shadow="sm">
                                <Heading size="sm" color={colorMode === 'light' ? 'gray.800' : 'gray.200'}>Step 2</Heading>
                                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>Upload your PDF. We'll process your file and make it ready for you to talk to.</Text>
                            </Box>
                            <Box p={4} bg={colorMode === 'light' ? 'white' : 'gray.700'} borderRadius="md" shadow="sm">
                                <Heading size="sm" color={colorMode === 'light' ? 'gray.800' : 'gray.200'}>Step 3</Heading>
                                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>Start asking questions. It's that simple. Try Chat-docs AI today. It takes less than a minute.</Text>
                            </Box>
                        </VStack>
                    </Box>
                </Flex>

                {/* Features Section */}
                <Box className="py-32 px-6 bg-gradient-to-r from-teal-500 to-blue-400 animate-fadeIn">
                    <Box className="container mx-auto text-center">
                        <Heading size="xl" className="mb-6 text-white animate-fadeInUp">{t('home.features')}</Heading>
                        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
                            <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-fadeInUp">
                                <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-iconBounce">
                                    <FaCog size={28} color="#38a169" />
                                </Box>
                                <Heading size="md" className="text-white">{t('home.feature1')}</Heading>
                                <Text className="text-white">{t('home.feature1_description')}</Text>
                            </VStack>
                            <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-fadeInUp">
                                <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-iconBounce">
                                    <FaHammer size={28} color="#38a169" />
                                </Box>
                                <Heading size="md" className="text-white">{t('home.feature2')}</Heading>
                                <Text className="text-white">{t('home.feature2_description')}</Text>
                            </VStack>
                            <VStack spacing={4} maxW="xs" className="animate-fadeInUp">
                                <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-iconBounce">
                                    <FaMagic size={28} color="#38a169" />
                                </Box>
                                <Heading size="md" className="text-white">{t('home.feature3')}</Heading>
                                <Text className="text-white">{t('home.feature3_description')}</Text>
                            </VStack>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            {/* What People Say Section */}
            <Box bg="gray.100" py={16} px={6} className="animate-fadeIn">
                <Box className="container mx-auto text-center">
                    <Heading size="xl" className="mb-6 text-gray-800">{t('home.what_people_say')}</Heading>
                    <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
                        <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-scaleUp">
                            <Avatar size="xl" name="John Doe" src="https://bit.ly/dan-abramov" />
                            <Text fontWeight="bold">John Doe</Text>
                            <Text className="text-gray-600">"ChatDocko AI has transformed my study sessions. The AI chat feature is incredibly helpful and intuitive."</Text>
                        </VStack>
                        <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-scaleUp">
                            <Avatar size="xl" name="Jane Smith" src="https://bit.ly/tioluwani-kolawole" />
                            <Text fontWeight="bold">Jane Smith</Text>
                            <Text className="text-gray-600">"I love how easy it is to upload and interact with my PDFs and tests. The integration is seamless."</Text>
                        </VStack>
                        <VStack spacing={4} maxW="xs" className="animate-scaleUp">
                            <Avatar size="xl" name="Alice Johnson" src="https://bit.ly/kent-c-dodds" />
                            <Text fontWeight="bold">Alice Johnson</Text>
                            <Text className="text-gray-600">"The AI insights have provided a new perspective on my study materials. Highly recommend ChatDocko AI."</Text>
                        </VStack>
                    </Flex>
                </Box>
            </Box>

            {/* Pricing Section */}
            <Pricing />

            {/* Call to Action Section with Background */}
            <Box
                bgImage={`url(${RobotImage})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                py={16}
                px={6}
                textWhite
                position="relative"
                zIndex="1"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bg: 'rgba(173, 216, 230, 0.5)',
                    zIndex: '-1',
                    backdropFilter: 'blur(2px)',
                }}
                className="animate-fadeIn"
            >
                <Box className="container mx-auto text-center">
                    <Heading size="xl" className="mb-6">{t('home.cta_title')}</Heading>
                    <Text fontSize="lg" className="mb-8">{t('home.cta_description')}</Text>
                    <Button size="lg" colorScheme="whiteAlpha" className="animate-buttonMove">{t('home.get_started')}</Button>
                </Box>
            </Box>

            {/* Styles */}
            <style jsx>{`
                .text-container:hover {
                    transform: scale(1.05);
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-100%); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.7s ease-in-out;
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(100%); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slideInRight {
                    animation: slideInRight 0.7s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-in-out;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-in-out;
                }
                @keyframes iconBounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }
                .animate-iconBounce {
                    animation: iconBounce 2s infinite;
                }
                @keyframes buttonMove {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(10px);
                    }
                }
                .animate-buttonMove {
                    animation: buttonMove 1.5s infinite;
                }
            `}</style>
        </Box>
    );
};

export default Home;
