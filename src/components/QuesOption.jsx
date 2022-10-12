import React from 'react';
import { toast } from 'react-toastify';

const QuesOption = ({option, id, correctAnswer}) => {

    const getRightOrWrong = (ans) => {
        if(ans === correctAnswer){
            toast.success('Wow! Your Answer is Correct.', {autoClose: 500})
        }
        else{
            toast.warning('Wrong Answer', {autoClose: 500})
        }
    }

    return (
        <div className='text-lg border border-violet-300 pl-5 py-2 flex flex-row items-center' >
            <input onClick={() =>getRightOrWrong(option)} type="radio" name={id} />
            <p className='ml-5'>{option}</p>
        </div>
    );
};

export default QuesOption;
  