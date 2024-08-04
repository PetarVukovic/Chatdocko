import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';

interface PlanCardProps {
    title: string;
    features: string[];
    buttonText: string;
    bgColor?: string;
    onClick?: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, features, buttonText, bgColor = "white", onClick }) => {
    return (
        <Box bg={bgColor} p={6} rounded="lg" shadow="md" className="transition-transform transform hover:scale-105">
            <Heading as="h2" size="xl" mb={4} className="text-center">
                {title}
            </Heading>
            <VStack align="start" spacing={2} mb={4}>
                {features.map((feature, index) => (
                    <Text key={index} className="text-gray-700">
                        {feature}
                    </Text>
                ))}
            </VStack>
            <Button colorScheme="teal" variant="solid" onClick={onClick} className="w-full">
                {buttonText}
            </Button>
        </Box>
    );
};

export default PlanCard;
