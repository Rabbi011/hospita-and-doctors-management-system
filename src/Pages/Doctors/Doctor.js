import React from 'react';

const Doctor = ({DoctorOption}) => {
    const { DoctorName, deg, spe, level, work, img } = DoctorOption;
    return (
        <section>
            <div className="card shadow-xl my-5">
                <figure><img style={{height:'300px',width:"250px"}} src={img} alt="Shoes" className="rounded-xl" /></figure>
                <div className="card-body">
                <h2 className="text-2xl text-teal-400 font-bold text-center">{DoctorName}</h2>
                <h2 className="text-1xl text-center">{deg}</h2>
                <h2 className="text-1xl text-red-600 font-bold text-center">{spe}</h2>
                <h2 className="text-1xl font-bold text-center">{level}</h2>
                <h2 className="text-1xl text-center">{work}</h2>
                    
                </div>
            </div>
            
        </section>
    );
};

export default Doctor;