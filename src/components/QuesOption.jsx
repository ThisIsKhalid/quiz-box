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
        <div onClick={() =>getRightOrWrong(option)} className='text-lg border border-violet-300 pl-5 py-2' >
            <input type="radio" name={id} id={index} />
            <label htmlFor={index}>  {option}</label>
        </div>
    );
};

export default QuesOption;
  