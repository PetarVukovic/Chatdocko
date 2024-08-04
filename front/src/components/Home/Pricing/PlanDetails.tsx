import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const PlanDetails: React.FC = () => {
    return (
        <Box bg="white" p={6} rounded="lg" shadow="md" className="mt-8">
            <Heading as="h2" size="lg" mb={4} className="text-center">
                Plan Details
            </Heading>
            <Table variant="simple" className="w-full">
                <Thead>
                    <Tr className="bg-gray-200">
                        <Th>Feature</Th>
                        <Th>Free Plan</Th>
                        <Th>Pro Plan</Th>
                        <Th>Enterprise Plan</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Basic features</Td>
                        <Td>√</Td>
                        <Td>√</Td>
                        <Td>√</Td>
                    </Tr>
                    <Tr>
                        <Td>Advanced features</Td>
                        <Td>❌</Td>
                        <Td>√</Td>
                        <Td>√</Td>
                    </Tr>
                    <Tr>
                        <Td>Custom solutions</Td>
                        <Td>❌</Td>
                        <Td>❌</Td>
                        <Td>√</Td>
                    </Tr>
                    <Tr>
                        <Td>Support</Td>
                        <Td>Limited</Td>
                        <Td>Priority</Td>
                        <Td>Dedicated</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
};

export default PlanDetails;
