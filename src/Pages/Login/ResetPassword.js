import React from 'react';
import { useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = () => {
    const [userEmail, setUserEmail] = useState('')

    const handelEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }
    const handelForgetPassword = (data) => {
        if (!userEmail) {
            alert("Please enter your email address");
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email.')
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    return (

        <div>

            <div className='h-[600px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Reset Your Password</h2>
                    
                        <div className="form-control w-full max-w-xs">

                            <input onBlur={handelEmailBlur} type="email" placeholder="Please Enter Your email" className="input input-bordered w-full max-w-xs mt-5" />

                            <button onClick={handelForgetPassword} className="btn btn-success mt-3">Submit</button>
                        </div>

                      

                </div>
            </div>


        </div>
    );
};

export default ResetPassword;