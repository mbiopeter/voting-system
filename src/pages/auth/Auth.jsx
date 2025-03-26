import { Password } from '@mui/icons-material';
import React, { useState } from 'react';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username:"",
        email:"",
        password:"",
        confirm_password:""
    });

    const handleOnchange = (key, value) => {
        setUserDetails(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="flex items-center overflow-hidden justify-center min-h-screen bg-gray-100 px-4">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">

                <div className="w-full md:w-1/2 bg-teal-500 text-white p-8 flex flex-col justify-center items-center text-center">
                    <h2 className="text-3xl font-bold mb-4">{isSignUp ? 'Welcome Back!' : 'Join Us Today!'}</h2>
                    <p className="mb-6">{isSignUp ? 'To keep connected with us please login with your personal info' : 'Enter your details and start your journey with us'}</p>
                    <button
                        className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-teal-500 transition"
                        onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? 'SIGN IN' : 'SIGN UP'}
                    </button>
                </div>

                <div className="w-full md:w-1/2 p-8 flex flex-col h-auto justify-center">
                    <h2 className="text-2xl font-bold text-center mb-6">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
                    <p className="text-center text-gray-500 text-sm mb-4">or use your email for registration:</p>
                    <div>
                        {isSignUp && (
                            <div className="mb-4">
                                <input value={userDetails.username} onChange={(e) => handleOnchange('username', e.target.value)} type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                            </div>
                        )}
                        <div className="mb-4">
                            <input value={userDetails.email} onChange={(e) => handleOnchange('email', e.target.value)} type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        <div className="mb-4">
                            <input value={userDetails.password} onChange={(e) => handleOnchange('password', e.target.value)} type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>
                        {isSignUp && (
                            <div className="mb-4">
                                <input value={userDetails.confirm_password} onChange={(e) => handleOnchange('confirm_password', e.target.value)} type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                            </div>
                        )}
                        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
                            {isSignUp ? 'SIGN UP' : 'SIGN IN'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;