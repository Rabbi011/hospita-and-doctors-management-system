import React from 'react';
import doctor1 from '../../assets/images/doctor1.png';
import doctor2 from '../../assets/images/doctor2.png';
import doctor3 from '../../assets/images/doctor3.png';
import doctor4 from '../../assets/images/doctor4.png';
import doctor5 from '../../assets/images/doctor5.png';
import doctor6 from '../../assets/images/doctor6.png';
import Doctor from './Doctor';


const Doctors = () => {
    const doctors = [
        {
            "id": 1,
            "DoctorName": "Dr.Halima Akter",
            "deg": "MBBS, BCS (Health), FCPS (CHILD)",
            "spe": "Newborn, Adolescent & Child Diseases Specialist",
            "level": "Assistant Professor (Pediatrics)",
            "work": "Kushtia Medical College & Hospital",
            img: doctor2,
        },
        {
            "id": 2,
            "DoctorName": "Dr.Province Rehan",
            "deg": "MBBS, BCS, MD (CHILD), FCPS (FP)",
            "spe": "Child, Newborn & Adolescent Diseases Specialist",
            "level": "Consultant (Pediatrics)",
            "work": "Kushtia Medical College & Hospital",
            img: doctor1,
        },
        {
            "id": 3,
            "DoctorName": "Dr.Asifur Rahoman",
            "deg": "MBBS, BCS (Health), DCH, MSC",
            "spe": "Newborn, Adolescent & Child Diseases Specialist",
            "level": "Ex. Associate Professor (Pediatrics)",
            "work": "Kushtia Medical College & Hospital",
            img: doctor3,
        },
        {
            "id": 4,
            "DoctorName": "Dr.Rakibul Hasan",
            "deg": "MBBS, MD (CHILD)",
            "spe": "Newborn & Child Diseases Specialist",
            "level": "Assistant Professor (Pediatrics)",
            "work": "Kushtia Medical College & Hospital",
            img: doctor5,
        },
        {
            "id": 5,
            "DoctorName": "Dr.Adrita Sultana",
            "deg": "MBBS (CMC), DDV, MCPS (Dermatology & Venereology)",
            "spe": "Skin, Allergy, Leprosy & Sex Diseases Specialist",
            "level": "Senior Consultant (Dermatology)",
            "work": "Kushtia Medical College & Hospital",
            img: doctor4,
        },
        {
            "id": 6,
            "DoctorName": "Dr.Jannatul Ferdous",
            "deg": "MBBS, BCS (Health), FCPS (CHILD)",
            "spe": "Newborn, Adolescent & Child Diseases Specialist",
            "level": "Consultant (Pediatrics)",
            "work": "Kushtia Medical College & Hospital",
            img: doctor6,

        },


    ]

    return (
        <section className='my-20'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
                {
                    doctors?.map(option => <Doctor
                        key={option.id}
                        DoctorOption={option}
                    ></Doctor>)
                }
            </div>
           
        </section>
    );
};

export default Doctors;