import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from 'react';

export const TopicsContext = createContext([]);

const Main = () => {
    const loaderData = useLoaderData();
    const topics = loaderData.data;

    return (
        <TopicsContext.Provider value={topics}>
            <Header />
            <Outlet />
            <Footer />
        </TopicsContext.Provider>
    );
};

export default Main;