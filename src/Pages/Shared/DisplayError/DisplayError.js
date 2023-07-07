import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import dribbble from '../../../assets/images/dribbble_1.gif';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <section >
            <div className='text-center mt-16'>
                <p className='text-red-500 text-2xl'>404</p>
                <p className='text-red-500'>Something went wrong!!!</p>
                <p className='text-red-400'>{error.statusText || error.message}</p>
                <Link className="text-3xl text-green-500"> Please <button onClick={handleLogOut}>Click Sign out</button> and log back in</Link>
            </div>

            <div className='hero container max-w-screen-lg mx-auto pt-10'>
                <img src={dribbble} className=" rounded-lg shadow-2xl lg:w-1/2" alt='' />
            </div>


        </section>
    );
};

export default DisplayError;