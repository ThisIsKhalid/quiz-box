import React from 'react';

const QuesOption = ({option, index, id}) => {
    return (
        <div className='text-lg'>
            <input type="radio" name={id} id={index} />
            <label htmlFor={index}>  {option}</label>
        </div>
    );
};

export default QuesOption;
  