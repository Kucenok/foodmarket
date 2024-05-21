import React from 'react';
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Quote from "../components/Quote";
import ChiefPage from "../components/ChiefPage";

const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Skills />
            <Quote />
            <ChiefPage />
        </div>
    );
};

export default Home;
