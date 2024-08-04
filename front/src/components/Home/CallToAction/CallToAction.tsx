import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const CallToAction: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            py={16}
            px={6}
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            color="white"
            textAlign="center"
        >
            <Box className="container mx-auto">
                <Heading size="2xl" mb={4}>
                    {t('home.cta_title')}
                </Heading>
                <Text fontSize="lg" mb={8}>
                    {t('home.cta_description')}
                </Text>
                <Button size="lg" colorScheme="whiteAlpha">
                    {t('home.get_started')}
                </Button>
            </Box>
        </Box>
    );
};

export default CallToAction;
