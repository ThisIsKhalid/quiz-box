import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quiz = () => {
    const {data} = useLoaderData();
    const {questions, name} = data;
    
    return (
        <div>
            <h1 className='text-4xl font-bold font-mono text-center my-5 text-gray-700'>Quiz of <span className='text-fuchsia-700'>{name}</span> :</h1>
            <div>
                {
                    questions.map((question, index) => <Questions
                    key={question.id}
                    questions={question}
                    questionNumber={index}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;