import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface SidebarProps {
    children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <Box
            w={{ base: 'full', md: '1/4' }}
            p={4}
            bg="white"
            shadow="md"
            borderRight="1px solid"
            borderColor="gray.200"
            position="fixed"
            top="64px" // Adjust based on navbar height
            h="calc(100vh - 64px)"
            overflowY="auto"
            display={{ base: 'none', md: 'block' }}
        >
            {children}
        </Box>
    );
};

export default Sidebar;
