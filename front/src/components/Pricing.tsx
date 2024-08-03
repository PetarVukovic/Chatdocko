
import { Box, Button, Heading, Text, VStack, Grid, GridItem, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default function Pricing() {
    return (
        <Box className="min-h-screen bg-gray-100 p-8">
            <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                Pricing Plans
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} mb={8}>
                {/* Free Plan */}
                <GridItem bg="white" p={6} rounded="lg" shadow="md">
                    <Heading as="h2" size="xl" mb={4}>
                        Free Plan
                    </Heading>
                    <VStack align="start" spacing={2} mb={4}>
                        <Text>Basic features</Text>
                        <Text>Limited support</Text>
                    </VStack>
                    <Button colorScheme="teal" variant="solid">
                        Get Started
                    </Button>
                </GridItem>
                {/* Pro Plan */}
                <GridItem bg="green.100" p={6} rounded="lg" shadow="md">
                    <Heading as="h2" size="xl" mb={4}>
                        Pro Plan
                    </Heading>
                    <VStack align="start" spacing={2} mb={4}>
                        <Text>Advanced features</Text>
                        <Text>Priority support</Text>
                    </VStack>
                    <Button colorScheme="teal" variant="solid">
                        Upgrade Now
                    </Button>
                </GridItem>
                {/* Enterprise Plan */}
                <GridItem bg="white" p={6} rounded="lg" shadow="md">
                    <Heading as="h2" size="xl" mb={4}>
                        Enterprise Plan
                    </Heading>
                    <VStack align="start" spacing={2} mb={4}>
                        <Text>Custom solutions</Text>
                        <Text>Dedicated support</Text>
                    </VStack>
                    <Button colorScheme="teal" variant="solid">
                        Contact Us
                    </Button>
                </GridItem>
            </Grid>
            {/* Details Section */}
            <Box bg="white" p={6} rounded="lg" shadow="md">
                <Heading as="h2" size="lg" mb={4}>
                    Plan Details
                </Heading>
                <Table variant="simple">
                    <Thead>
                        <Tr>
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
        </Box>
    );
}
