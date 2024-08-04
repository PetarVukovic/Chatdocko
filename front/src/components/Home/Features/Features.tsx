import React from 'react';
import { Box, Heading, Flex, VStack, Text } from '@chakra-ui/react';
import { FaCog, FaHammer, FaMagic } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box className="py-32 px-6 bg-gradient-to-r from-teal-500 to-blue-400 animate-fadeIn">
            <Box className="container mx-auto text-center">
                <Heading size="xl" className="mb-6 text-white animate-fadeInUp">
                    {t('home.features')}
                </Heading>
                <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
                    <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-fadeInUp">
                        <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-iconBounce">
                            <FaCog size={28} color="#38a169" />
                        </Box>
                        <Heading size="md" className="text-white">
                            {t('home.feature1')}
                        </Heading>
                        <Text className="text-white">{t('home.feature1_description')}</Text>
                    </VStack>
                    <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-fadeInUp">
                        <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-iconBounce">
                            <FaHammer size={28} color="#38a169" />
                        </Box>
                        <Heading size="md" className="text-white">
                            {t('home.feature2')}
                        </Heading>
                        <Text className="text-white">{t('home.feature2_description')}</Text>
                    </VStack>
                    <VStack spacing={4} maxW="xs" className="animate-fadeInUp">
                        <Box className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-iconBounce">
                            <FaMagic size={28} color="#38a169" />
                        </Box>
                        <Heading size="md" className="text-white">
                            {t('home.feature3')}
                        </Heading>
                        <Text className="text-white">{t('home.feature3_description')}</Text>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Features;
