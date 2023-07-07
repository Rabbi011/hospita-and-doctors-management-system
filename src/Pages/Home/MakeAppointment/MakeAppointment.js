import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{ background: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 lg:w-1/2 hidden lg:block rounded-lg shadow-2xl" alt='Doctor' />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">Once you provide this information, our appointment scheduling team will promptly assist you in scheduling your appointment. Please note that appointment availability may be subject to the schedule of the healthcare provider and the nature of the appointment requested. We will do our best to accommodate your preferred time slot or offer alternative options.</p>

                        <Link to="/appointment">
                            <PrimaryButton>Get Started</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;