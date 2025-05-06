import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftASide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftASide;