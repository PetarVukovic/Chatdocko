// src/components/LanguageToggle.tsx
import React from 'react';
import { Flex, Switch, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const isEnglish = currentLanguage === 'en';
    const switchBg = useColorModeValue('gray.200', 'gray.600');
    const switchColor = useColorModeValue('gray.800', 'white');

    const handleToggle = () => {
        i18n.changeLanguage(isEnglish ? 'hr' : 'en');
    };

    return (
        <Flex alignItems="center">
            <Text mr={2} color={switchColor}>{isEnglish ? 'en' : 'hr'}</Text>
            <Switch
                isChecked={isEnglish}
                onChange={handleToggle}
                bg={switchBg}
                colorScheme="teal"
            />
            <Text ml={2} color={switchColor}>{isEnglish ? 'hr' : 'en'}</Text>
        </Flex>
    );
};

export default LanguageToggle;
