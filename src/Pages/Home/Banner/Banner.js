import React from 'react';
import char from '../../../assets/images/chair.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


const Banner = () => {
    return (
        <div className="hero" style={{ background: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={char} className=" rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <span className="text-5xl font-bold text-secondary">
                        <Typewriter
                            words={['Welcome to our', 'hospital site!',
                            ]}
                            loop={15}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <p className="py-6">Our hospital is a leading healthcare institution dedicated to providing high-quality medical services and compassionate care to patients. Here is a brief summary of what you can expect from our hospital site</p>
                    <Link to="/appointment">
                        <PrimaryButton>Get Started</PrimaryButton>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;