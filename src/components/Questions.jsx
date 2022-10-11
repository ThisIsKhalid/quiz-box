import React from 'react';
import QuesOption from './QuesOption';

const Questions = ({questions, questionNumber}) => {
    const {options, question, id, correctAnswer} = questions;
    return (
        <div className='container mx-auto w-3/4 border border-slate-100 shadow-lg rounded-lg text-violet-900 font-mono mb-5'>
            <h1 className='text-2xl text-center w-2/3 mx-auto mb-3'>Quiz {questionNumber}:  {question}</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 px-5 pb-3'>
                {
                    options.map((option, index) => <QuesOption
                    key={index}
                    index={index}
                    option={option}
                    id={id}
                    correctAnswer={correctAnswer}
                    ></QuesOption>)
                }
            </div>
        </div>
    );
};

export default Questions;