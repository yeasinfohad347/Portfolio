import React from 'react';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Project';
import ContractForm from './ContractForm';
import Skill from './Skill';
import EducationSection from './EducationSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe/>
            <Skill/>
            <EducationSection/>
            <Projects></Projects>
            <ContractForm/>

        </div>
    );
};

export default Home;