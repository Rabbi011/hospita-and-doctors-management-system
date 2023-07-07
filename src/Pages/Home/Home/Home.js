import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import MessengerCustomerChatBoard from '../../Shared/MessengerCustomerChatBoard/MessengerCustomerChatBoard';
import PhoneLogin from '../../PhoneLogin/PhoneLogin';



const Home = () => {
    return (
        <div className='mx-5'>
            {/* <PhoneLogin></PhoneLogin> */}
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
           <MessengerCustomerChatBoard></MessengerCustomerChatBoard> 
           
        </div>
    );
};

export default Home;