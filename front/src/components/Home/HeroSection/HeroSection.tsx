import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import RobotImage from '../../../assets/robot.jpg';
import { useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
    const { colorMode } = useColorMode();
    const { t } = useTranslation();

    return (
        <Box
            position="relative"
            bgImage={`url(${RobotImage})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            zIndex="1"
            py={40} // Increased padding for larger box
            textAlign="center"
            color="white"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bg: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better text visibility
                zIndex: '-1',
            }}
        >
            <VStack spacing={8} maxW="4xl" mx="auto">
                <Heading as="h1" size="4xl" fontWeight="bold" lineHeight="shorter">
                    Welcome to ChatDocko
                </Heading>
                <Text fontSize="2xl" maxW="3xl" fontWeight="medium">
                    Hello, I'm <b>ChatDocko</b>, your friendly AI assistant! I'm here to help you unlock the secrets of your
                    documents. Whether it's PDFs, Word documents, CSVs, or Excel sheets, I'm equipped to understand and chat
                    about all the details within. Let's dive into your files together, answer your questions, and make the most
                    of your information. With my intuitive features and user-friendly interface, learning and managing your
                    documents has never been easier or more fun!
                </Text>
                <Link to="/chat">
                    <Button colorScheme="teal" size="lg" mt={4} className="animate-buttonMove">
                        Get Started
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
};

export default HeroSection;
