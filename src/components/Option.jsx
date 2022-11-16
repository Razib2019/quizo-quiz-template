import React from 'react';

const Option = ({ index, option }) => {
    return (
        <div className='text-start font-bold my-3'>
            <input className='mr-2' type="radio" name="radio values" id="" value={index} />
            {option}
        </div>
    );
};

export default Option;