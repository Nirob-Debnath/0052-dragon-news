import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftASide from '../components/homelayout/LeftASide';
import RightASide from '../components/homelayout/RightASide';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftASide></LeftASide>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightASide></RightASide>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;