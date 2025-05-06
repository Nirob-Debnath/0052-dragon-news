import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login with</h2>
            <div className='space-y-3 grid grid-cols-1 mx-2 mt-5'>
                <button className='btn btn-outline btn-secondary'><FcGoogle size={24}/>Login with google</button>
                <button className='btn btn-outline btn-primary'><FaGithub size={24}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;