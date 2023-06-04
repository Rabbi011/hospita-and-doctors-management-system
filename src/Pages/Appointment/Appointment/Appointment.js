import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import MessengerCustomerChatBoard from '../../Shared/MessengerCustomerChatBoard/MessengerCustomerChatBoard';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
            selectedDate={selectedDate}
            ></AvailableAppointments>
            <MessengerCustomerChatBoard></MessengerCustomerChatBoard>
        </div>
    );
};

export default Appointment;