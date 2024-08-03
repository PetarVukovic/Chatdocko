import React, { useState } from 'react';
import { Box, Button, Heading, Textarea, VStack, Stack } from '@chakra-ui/react';

const ProjectManager: React.FC = () => {
    const [plan, setPlan] = useState('');
    const [plans, setPlans] = useState<string[]>([]);

    const handleAddPlan = () => {
        if (plan.trim()) {
            setPlans([...plans, plan]);
            setPlan('');
        }
    };

    return (
        <Box mt={6}>
            <Heading size="md" mb={4}>Plan Your Studying</Heading>
            <VStack spacing={4} align="start">
                <Textarea
                    placeholder="Write your study plan here..."
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                />
                <Button colorScheme="teal" onClick={handleAddPlan}>Add Plan</Button>
                <Stack spacing={2} mt={4}>
                    {plans.map((item, index) => (
                        <Box key={index} p={3} bg="gray.100" rounded="md" shadow="sm">
                            {item}
                        </Box>
                    ))}
                </Stack>
            </VStack>
        </Box>
    );
};

export default ProjectManager;
