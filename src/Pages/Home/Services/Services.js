import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png';
import FreeCheckup from '../../../assets/images/FreeCheckup.jpg';
import Medicines from '../../../assets/images/Medicines.jpg';
import Ambulance from '../../../assets/images/Ambulance.jpg';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 2,
            name: '24/7 Ambulance',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Ambulance
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
        {
            id: 4,
            name: 'Free Checkup',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: FreeCheckup
        },
        {
            id: 5,
            name: 'Medicines',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Medicines
        },
        {
            id: 6,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
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