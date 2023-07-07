import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment}) => {
    const { DoctorName, name, price, slots } = appointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center mt-10">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <h2 className="text-1xl text-secondary font-bold text-center">{DoctorName}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length >1 ? 'spaces' : 'space'} Available</p>
                <p><small>Price BDT : {price}</small></p>
               
                <div className="card-actions justify-center">
                    <label 
                    disable ={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary text-white"
                    onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;