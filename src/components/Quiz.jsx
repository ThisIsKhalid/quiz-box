import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>this is quix</h1>
        </div>
    );
};

export default Quiz;