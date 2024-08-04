import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import PlanCard from './PlanCard';
import PlanDetails from './PlanDetails';

const Pricing: React.FC = () => {
    return (
        <Box className="min-h-screen bg-gray-100 p-8">
            <Heading as="h1" size="2xl" textAlign="center" mb={8} className="text-blue-600">
                Pricing Plans
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} mb={8} className="text-gray-800">
                <GridItem>
                    <PlanCard
                        title="Free Plan"
                        features={["Basic features", "Limited support"]}
                        buttonText="Get Started"
                    />
                </GridItem>
                <GridItem>
                    <PlanCard
                        title="Pro Plan"
                        features={["Advanced features", "Priority support"]}
                        buttonText="Upgrade Now"
                        bgColor="green.100"
                    />
                </GridItem>
                <GridItem>
                    <PlanCard
                        title="Enterprise Plan"
                        features={["Custom solutions", "Dedicated support"]}
                        buttonText="Contact Us"
                    />
                </GridItem>
            </Grid>
            <PlanDetails />
        </Box>
    );
};

export default Pricing;
