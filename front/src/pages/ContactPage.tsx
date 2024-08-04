import React from 'react';
import { Box, Heading, Text, VStack, HStack, Button, Icon, Flex, Image, Input, Textarea } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import JPImage from '../assets/jp.jpeg';
import RobotImage from '../assets/robot.jpg'; // Import the background image

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      bgImage={`url(${RobotImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      position="relative"
    >
      <Box position="absolute" top={0} left={0} w="full" h="full" bg="rgba(255, 255, 255, 0.8)" zIndex={1}></Box>
      <Box position="relative" zIndex={2}>
        <Navbar />
        <Box p={6} minH="100vh">
          <Heading as="h1" size="2xl" mb={6} textAlign="center" className="animate-slideInDown">
            {t('contact.heading')}
          </Heading>

          {/* Team Introduction and Contact Form Section */}
          <Box mb={8} p={4} bg="white" borderRadius="md" shadow="md" className="animate-fadeIn">
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" align="center">
              {/* Image and Description */}
              <Box mb={{ base: 4, md: 0 }} mr={{ md: 4 }} position="relative" className="animate-fadeInLeft">
                <Image src={JPImage} alt="Petar and Josipa" borderRadius="md" boxSize="300px" />
                <Icon as={FaHeart} color="red.500" position="absolute" top="-10px" left="-10px" boxSize="20px" />
                <Icon as={FaHeart} color="red.500" position="absolute" top="-10px" right="-10px" boxSize="20px" />
                <Icon as={FaHeart} color="red.500" position="absolute" bottom="-10px" left="-10px" boxSize="20px" />
                <Icon as={FaHeart} color="red.500" position="absolute" bottom="-10px" right="-10px" boxSize="20px" />
              </Box>
              <VStack spacing={4} maxW="md" textAlign={{ base: 'center', md: 'left' }} className="animate-fadeInRight">
                <Heading size="md">{t('contact.josipa_name')} & {t('contact.petar_name')}</Heading>
                <Text>{t('contact.josipa_title')} & {t('contact.petar_title')}</Text>
                <Text>We are a dynamic duo passionate about bringing AI and ML solutions to help automate tasks and improve efficiency. Petar is an experienced AI/ML engineer with a strong technical background, while Josipa specializes in marketing and analysis, ensuring our solutions are both cutting-edge and user-friendly. Together, we strive to innovate and provide the best services for our clients.</Text>
              </VStack>

              {/* Contact Form */}
              <VStack align="start" spacing={4} maxW="md" mt={{ base: 8, md: 0 }} className="animate-fadeInUp">
                <Heading size="lg">{t('contact.get_in_touch_heading')}</Heading>
                <Input placeholder={t('contact.form_name_placeholder')} />
                <Input placeholder={t('contact.form_email_placeholder')} type="email" />
                <Textarea placeholder={t('contact.form_message_placeholder')} />
                <Button colorScheme="teal" size="lg">{t('contact.send_message')}</Button>
              </VStack>
            </Flex>
          </Box>

          {/* Contact Information and Recommended Links */}
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
            {/* Contact Information Section */}
            <VStack align="start" spacing={4} w={{ base: 'full', md: '48%' }} p={4} bg="white" borderRadius="md" shadow="md" className="animate-fadeInLeft">
              <Heading size="lg">Contact</Heading>
              <HStack><Icon as={FaPhone} /><Text>+123 456 7890</Text></HStack>
              <HStack><Icon as={FaEnvelope} /><Text>info@charissaas.com</Text></HStack>
              <HStack><Icon as={FaMapMarkerAlt} /><Text>123 AI Street, Tech City</Text></HStack>
              <Heading size="md" mt={4}>{t('contact.follow_us')}</Heading>
              <HStack spacing={4}>
                <Button as="a" href="https://facebook.com" target="_blank" leftIcon={<FaFacebook />} variant="ghost" colorScheme="facebook">Facebook</Button>
                <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} variant="ghost" colorScheme="twitter">Twitter</Button>
                <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} variant="ghost" colorScheme="linkedin">LinkedIn</Button>
              </HStack>
            </VStack>

            {/* Recommended Links Section */}
            <VStack align="start" spacing={4} w={{ base: 'full', md: '48%' }} p={4} bg="white" borderRadius="md" shadow="md" className="animate-fadeInRight">
              <Heading size="lg">Recommended Links</Heading>
              <Button as="a" href="https://www.zastocistaistina.com/" target="_blank" variant="link" colorScheme="teal">www.zastocistaistina.com</Button>
              <Button as="a" href="https://dobriduh.hr/" target="_blank" variant="link" colorScheme="teal">www.dobriduh.hr</Button>
            </VStack>
          </Flex>
        </Box>
      </Box>

      {/* Styles */}
      <style jsx>{`
        .animate-slideInDown {
          animation: slideInDown 1s ease-in-out;
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-in-out;
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-in-out;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-in-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default ContactPage;
