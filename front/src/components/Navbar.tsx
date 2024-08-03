import React from 'react';
import { Flex, Heading, Stack, Button, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useThemeContext();
    const icon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />;

    return (
        <Flex
            as="nav"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            shadow="sm"
            w="full"
            p={4}
            align="center"
            justify="space-between"
            position="fixed"
            top={0}
            zIndex={10}
        >
            <Heading size="lg" color="teal.500">ChatDocko AI</Heading>
            <Stack direction="row" spacing={4} align="center">
                <Link to="/"><Button variant="ghost">Home</Button></Link>
                <Link to="/chat"><Button variant="ghost">Chat</Button></Link>
                <Link to="/schedule-learning"><Button variant="ghost">Schedule Learning</Button></Link>
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={icon}
                    onClick={toggleColorMode}
                />
            </Stack>
        </Flex>
    );
};

export default Navbar;
