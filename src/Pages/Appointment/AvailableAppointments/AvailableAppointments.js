import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://hospital-and-doctor-management-system-server.vercel.app/appointmentOptions?date=${date}`)
            .then(req => req.json())
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('https://hospital-and-doctor-management-system-server.vercel.app/appointmentOptions')
    //         .then(req => req.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate, 'PP')} </p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;