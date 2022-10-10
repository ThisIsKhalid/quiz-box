import React, { useContext } from 'react';
import { QuizTopicsContext } from './Root';

const Topics = () => {
    const quizTopics = useContext(QuizTopicsContext);
    console.log(quizTopics);
    return (
        <div>
            <h2>thsi is topics</h2>
        </div>
    );
};

export default Topics;