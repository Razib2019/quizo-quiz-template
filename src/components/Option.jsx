import React from 'react';

const Option = ({ index, option, handleCheckRightAnswer }) => {
    return (
        <div className='text-start font-bold my-3'>
            <input onClick={() => handleCheckRightAnswer(index)} className='mr-2' type="radio" name="radio values" id="" value={index} />
            {option}
        </div>
    );
};

export default Option;