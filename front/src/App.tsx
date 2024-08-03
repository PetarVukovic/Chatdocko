import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Home from './pages/Home';
import ChatInterface from './pages/ChatInterface';
import ScheduleLearning from './pages/ScheduleLearning';
import { ThemeContextProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <ThemeContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/schedule-learning" element={<ScheduleLearning />} />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </ChakraProvider>
  );
};

export default App;
