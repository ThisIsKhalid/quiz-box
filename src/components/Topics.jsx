import React, { useContext } from 'react';
import { QuizTopicsContext } from './Root';
import Topic from './Topic';

const Topics = () => {
    const quizTopics = useContext(QuizTopicsContext);
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 container mx-auto'>
            {
                quizTopics.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;