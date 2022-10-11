import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizTopicsContext } from './Root';

const Statistics = () => {
    const quizTopics = useContext(QuizTopicsContext);
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl font-bold text-purple-500 my-10'>Find Out How Many Questions Are There In Each Topic :</h1>
            <div className='flex justify-center'>
                <BarChart width={600} height={500} data={quizTopics}>
                    <XAxis dataKey="name" stroke="#fa7b0c" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" barSize={50} fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;