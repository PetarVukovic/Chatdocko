import React from 'react';
import { Box, Heading, Flex, VStack, Text, Avatar } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box bg="gray.100" py={16} px={6} className="animate-fadeIn">
            <Box className="container mx-auto text-center">
                <Heading size="xl" className="mb-6 text-gray-800">
                    {t('home.what_people_say')}
                </Heading>
                <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
                    <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-scaleUp">
                        <Avatar size="xl" name="John Doe" src="https://bit.ly/dan-abramov" />
                        <Text fontWeight="bold">John Doe</Text>
                        <Text className="text-gray-600">
                            "ChatDocko AI has transformed my study sessions. The AI chat feature is incredibly helpful and intuitive."
                        </Text>
                    </VStack>
                    <VStack spacing={4} maxW="xs" className="mb-8 md:mb-0 animate-scaleUp">
                        <Avatar size="xl" name="Jane Smith" src="https://bit.ly/tioluwani-kolawole" />
                        <Text fontWeight="bold">Jane Smith</Text>
                        <Text className="text-gray-600">
                            "I love how easy it is to upload and interact with my PDFs and tests. The integration is seamless."
                        </Text>
                    </VStack>
                    <VStack spacing={4} maxW="xs" className="animate-scaleUp">
                        <Avatar size="xl" name="Alice Johnson" src="https://bit.ly/kent-c-dodds" />
                        <Text fontWeight="bold">Alice Johnson</Text>
                        <Text className="text-gray-600">
                            "The AI insights have provided a new perspective on my study materials. Highly recommend ChatDocko AI."
                        </Text>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Testimonials;
