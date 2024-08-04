import React from 'react';
import { Box, Flex, Heading, Stack, Button, IconButton, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import CroatianFlag from '../../../assets/croatian-flag.png';
import EnglishFlag from '../../../assets/en-flag.png';
import { useTranslation } from 'react-i18next';
import LoginRegister from '../../LoginRegister';
import i18n from '../../../i18n';

const Header: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t } = useTranslation();

    return (
        <Box bg={colorMode === 'light' ? 'white' : 'gray.800'} shadow="sm" position="fixed" top="0" w="full" zIndex={10}>
            <Flex className="container mx-auto py-4 px-6" justifyContent="space-between" alignItems="center">
                <Heading size="lg" color={colorMode === 'light' ? 'teal.500' : 'teal.200'}>
                    ChatDocko AI
                </Heading>
                <Stack direction="row" spacing={4} alignItems="center">
                    <Button variant="ghost">{t('home.home_button')}</Button>
                    <Button variant="ghost">{t('home.features_button')}</Button>
                    <Link to="/contact">
                        <Button variant="ghost">{t('home.contact_button')}</Button>
                    </Link>
                    <Link to="/chat">
                        <Button colorScheme="teal">{t('home.get_started')}</Button>
                    </Link>
                    {/* Including the LoginRegister button */}
                    <LoginRegister />
                    <IconButton aria-label="Toggle dark mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
                    <IconButton aria-label="Switch to Croatian" icon={<Image src={CroatianFlag} alt="Croatian Flag" boxSize={6} />} onClick={() => i18n.changeLanguage('hr')} />
                    <IconButton aria-label="Switch to English" icon={<Image src={EnglishFlag} alt="English Flag" boxSize={6} />} onClick={() => i18n.changeLanguage('en')} />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Header;
