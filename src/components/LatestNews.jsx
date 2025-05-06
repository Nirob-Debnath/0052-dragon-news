import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <h2 className='text-base-100 bg-secondary px-4'>Latest</h2>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={50}>
                <p className='font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea officiis consequatur harum sunt, ipsam hic magnam veritatis, qui laborum atque rem sed enim eius alias, ex ipsum labore! Distinctio.
                </p>
            </Marquee>

        </div>
    );
};

export default LatestNews;