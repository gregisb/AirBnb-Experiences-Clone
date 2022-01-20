import React from 'react';

import HeroImg from '../images/group-photos.png'

const Hero = () => {
    return (
        <section className="hero">
            <img 
                src={HeroImg}
                className="hero--photo"
                alt="Hero"
            />
            
            <h1 className="hero--header">Online experiences</h1>
            
            <p className="hero--text">
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
};

export default Hero;