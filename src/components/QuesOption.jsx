import React from 'react';
import { toast } from 'react-toastify';

const QuesOption = ({option, index, id, correctAnswer}) => {

    const getRightOrWrong = (ans) => {
        if(ans === correctAnswer){
            toast.success('Wow! Your Answer is Correct.', {autoClose: 500})
        }
        else{
            toast.warning('Wrong Answer', {autoClose: 500})
        }
    }

    return (
        <div onClick={() =>getRightOrWrong(option)} className='text-lg'>
            <input type="radio" name={id} id={index} />
            <label htmlFor={index}>  {option}</label>
        </div>
    );
};

export default QuesOption;
  