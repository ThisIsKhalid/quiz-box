import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quiz = () => {
    const {data} = useLoaderData();
    const {questions, name} = data;
    
    return (
        <div>
            <h1>Quiz of {name}</h1>
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