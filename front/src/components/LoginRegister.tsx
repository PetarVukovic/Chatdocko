// src/components/LoginRegister.tsx
import React from 'react';
import { Box, Button, Input, Stack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

const LoginRegister: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} colorScheme="teal">
                Login / Register
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login / Register</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <Button leftIcon={<FaGoogle />} colorScheme="red">
                                Continue with Google
                            </Button>
                            <Box textAlign="center">or</Box>
                            <Input placeholder="Email" />
                            <Input placeholder="Password" type="password" />
                            <Button colorScheme="teal" width="full">
                                Login
                            </Button>
                            <Button variant="link" width="full">
                                Forgot password?
                            </Button>
                            <Button colorScheme="teal" variant="outline" width="full">
                                Register
                            </Button>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginRegister;
