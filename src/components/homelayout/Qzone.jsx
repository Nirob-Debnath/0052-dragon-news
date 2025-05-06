import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import ClassImage from "../../assets/class.png"
import PlayImage from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5 flex flex-col justify-center items-center'>
                <img src={swimmingImage} alt="" />
                <img src={ClassImage} alt="" />
                <img src={PlayImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;