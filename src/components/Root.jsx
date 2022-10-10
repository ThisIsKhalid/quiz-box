import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';


export const QuizTopicsContext = createContext([])


const Root = () => {
    const quizTopics = useLoaderData();
    const {data} = quizTopics;

    return (
        <QuizTopicsContext.Provider value={data}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </QuizTopicsContext.Provider>
    );
};

export default Root;