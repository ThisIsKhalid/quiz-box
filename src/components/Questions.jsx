import React from 'react';
import QuesOption from './QuesOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const Questions = ({questions, questionNumber}) => {
    const {options, question, id, correctAnswer} = questions;

    const getCorrectAns = (ans) => {
        toast.info(`Correct Answer: ${ans}`, {autoClose: 1000, theme: "colored"})
    }

    return (
        <div className='container mx-auto w-3/4 border border-slate-100 shadow-lg rounded-lg text-violet-900 font-mono mb-5 relative'>

            <h1 className='text-2xl text-center w-2/3 mx-auto mb-3'>Quiz {questionNumber}:  {question}</h1>

            <div onClick={() => getCorrectAns(correctAnswer)} className='absolute top-3 right-5'>
                <FontAwesomeIcon icon={faEye} />
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 px-5 pb-3'>
                {
                    options.map((option, index) => <QuesOption
                    key={index}
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