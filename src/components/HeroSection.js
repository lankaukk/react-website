import React from 'react';
import '../App.css'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>\
            <h2>Web Developer + Designer</h2>
            
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>

            <div className="line vertical l1"></div>
            <div className="line vertical l2"></div>
            <div className="line vertical l3"></div>

            <div className="line horizontal l4"></div>
            <div className="line horizontal l5"></div>
        </div>
    )
}

export default HeroSection
