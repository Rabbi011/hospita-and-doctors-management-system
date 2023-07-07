import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.jpg';
import people3 from '../../../assets/images/people3.jpg';
import Review from './Review';

const Testimonial = () => {


    const reviews = [
        {
            _id: 1, 
            name: 'Prince Mahahud',
            img: people1,
            review: 'Recently visited health check up department of This Hospital for a whole body check up. The entire process from check in to the end was seamless. The staff at the health check department was courteous, helpful and very attentive.',
            location: 'Khulna'
        },
        {
            _id: 2, 
            name: 'Ripon hasan',
            img: people2,
            review: 'This hospital Dr.Radha Shah at reception people Mr.Venkat helping to patients excelent way of speaking Guidense.. I felt very Happy with this people.. I strongly recommend to my Friends n Relatives to this Apollo Hospital',
            location: 'Dhaka'
        },
        {
            _id: 3, 
            name: 'Nasim shrker',
            img: people3,
            review: 'This hospital Dr.Halima Shah at reception people Mr.Venkat helping to patients excelent way of speaking Guidense.. I felt very Happy with this people.. I strongly recommend to my Friends n Relatives to this Hospital',
            location: 'khulna'
        },
    ]

    return (
        <section className='my-16'>
        <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                <h2 className="text-4xl">What Our Patients Says</h2>
            </div>
            <figure>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </figure>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                >
                </Review>)
            }
        </div>
    </section>
    );
};

export default Testimonial;