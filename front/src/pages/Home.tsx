import React, { useState, useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';
import Header from '../components/Home/Header/Header';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import Features from '../components/Home/Features/Features';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Pricing from '../components/Home/Pricing/Pricing';
import CallToAction from '../components/Home/CallToAction/CallToAction';

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Box className="min-h-screen flex items-center justify-center">
                <Spinner size="xl" color="teal.500" />
            </Box>
        );
    }

    return (
        <Box className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#90cdf4" fillOpacity="1" d="M0,192L40,181.3C80,171,160,149,240,165.3C320,181,400,235,480,245.3C560,256,640,224,720,213.3C800,203,880,213,960,213.3C1040,213,1120,203,1200,213.3C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                </svg>
            </div>
            <Header />
            <HeroSection />
            <Features />
            <Testimonials />
            <Pricing />
            <CallToAction />
        </Box>
    );
};

export default Home;
