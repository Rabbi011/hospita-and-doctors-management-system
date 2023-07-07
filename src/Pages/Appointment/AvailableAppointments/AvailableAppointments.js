import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    //const [searchValue, setSearchValue] = useState('');
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://hospital-and-doctor-management-system-server.vercel.app/appointmentOptions?date=${date}`)
            .then(req => req.json())
    });
    if (isLoading) {
        return <Loading></Loading>
    }

//     const handelSearch = (e) =>{
// // console.log("handelSearch", e.target.value); 
//   const S = appointmentOptions.filter(data => data.name.toLowerCase().includes(e.target.value.toLowerCase()));
//   setSearchValue(S)

//     }

    

    console.log("appointmentOptions",appointmentOptions)

    // useEffect(() => {
    //     fetch('https://hospital-and-doctor-management-system-server.vercel.app/appointmentOptions')
    //         .then(req => req.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>{appointmentOptions.length}Available Appointments on: {format(selectedDate, 'PP')} </p>
{/* 
            <p className='text-center mt-5'><input onChange={handelSearch} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" /></p> */}

            {/* <button >search</button> */}

            

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