import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
//import Loading from '../../Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking= useLoaderData();
    //const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    // if(navigation === "loading"){
    //     return <Loading></Loading>
    // }
    //console.log('bookin',data);
    return (
        <div>
            <h3 className='text-3xl'>payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>BDT {price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;