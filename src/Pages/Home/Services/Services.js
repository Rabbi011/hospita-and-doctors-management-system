import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png';
import FreeCheckup from '../../../assets/images/FreeCheckup.png';
import Medicines from '../../../assets/images/Medicines.png';
import Ambulance from '../../../assets/images/Ambulance.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatment is a dental procedure that involves the application of fluoride to the teeth in order to prevent tooth decay and strengthen enamel.',
            img: cavity
        },
        {
            id: 2,
            name: '24/7 Ambulance',
            description: 'A 24/7 ambulance service provides round-the-clock emergency medical transportation for individuals in need of urgent medical care',
            img: Ambulance
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is a cosmetic dental procedure aimed at lightening the color of teeth and removing stains or discoloration.',
            img: whitening
        },
        {
            id: 4,
            name: 'Free Checkup',
            description: 'A free checkup, often referred to as a complimentary or preventive checkup, is a medical examination provided at no cost to the patient',
            img: FreeCheckup
        },
        {
            id: 5,
            name: 'Medicines',
            description: 'Medicines, also known as medications or drugs, are substances used to diagnose, treat, cure, or prevent diseases, manage symptoms, or improve overall health.',
            img: Medicines
        },
        {
            id: 6,
            name: 'Cavity Filling',
            description: 'Cavity filling, also known as dental filling or restoration, is a common dental procedure used to repair a tooth that has been damaged by tooth decay or cavities.',
            img: fluoride 
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide </h2>

            </div>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                servicesData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>

        </div>

        
    );
};

export default Services;