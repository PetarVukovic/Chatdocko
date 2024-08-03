import React, { useState } from 'react';
import { Box, Button, VStack, Textarea } from '@chakra-ui/react';

interface ChatBoxProps {
    messages: string[];
    onSendMessage: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <Box className="bg-white p-4 shadow-md rounded-md" mb={6}>
            <VStack align="stretch" spacing={4}>
                {messages.map((msg, index) => (
                    <Box key={index} bg="gray.100" p={3} borderRadius="md">
                        {msg}
                    </Box>
                ))}
            </VStack>
            <Box mt={4}>
                <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    size="sm"
                />
                <Button mt={2} colorScheme="teal" onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBox;
