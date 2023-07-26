import React from 'react';
import bg from '../../assets/images/Hospital-Managemen.jpg';

const About = () => {
    return (
        <section className='my-12'>

            <div className="hero min-h-screen" style={{ background: `url(${bg})`, backgroundRepeat: "no-repeat" , height: "100%",backgroundSize: "cover"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Welcome to the Doctor Management System About page!</h1>
                        <p className="mb-5">Our Doctor Management System is a comprehensive software solution designed to simplify and streamline the management of your medical practice. Developed with the needs of doctors and healthcare professionals in mind, our system offers a wide range of features and tools to enhance your practice's efficiency and effectiveness.</p>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;