import React from 'react';
import QuesOption from './QuesOption';

const Questions = ({questions, questionNumber}) => {
    const {options, question} = questions;
    return (
        <div className='container mx-auto border border-slate-100 shadow-lg rounded-lg'>
            <h1>Quiz {questionNumber}:{question}</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    options.map((option, index) => <QuesOption
                    key={index}
                    index={index}
                    option={option}
                    ></QuesOption>)
                }
            </div>
        </div>
    );
};

export default Questions;