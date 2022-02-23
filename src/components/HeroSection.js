import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import '../App.css'
import './HeroSection.css';

class HeroSection extends Component {

    
    componentDidMount() {
        console.log('componentDidMount() lifecycle');
        const text = ["Designer", "Developer", "Artist", "Engineer"];
        let counter = 0;
        let elem = document.getElementById("professions");
        console.log(elem);
        setInterval(change, 3000);
        function change() {
        elem.innerHTML = text[counter];
            counter++;
            if(counter >= text.length) { counter = 0; }
        }
    }
    
    render() {
        return (
            <div className='hero-container'>
                <div className='bigcirclecontainer'>
                <div className="circle c0"></div>


                <h1 style={{zIndex: '10',  fontSize: '10vw'}}>
                    Web<br></br>
                    <div id="professions"></div>
                    
                </h1>

                

                </div>
                
                {/* <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div> */}

                <div className="line vertical l1"></div>
                <div className="line vertical l2"></div>
                <div className="line vertical l3"></div>

                <div className="line horizontal l4"></div>
                <div className="line horizontal l5"></div>
            </div>
        );
    }
    
}

export default HeroSection
