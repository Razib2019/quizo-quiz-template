import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
import Option from './Option';



const Questions = (props) => {
    const { correctAnswer, question, options, id } = props.question;
    const { index } = props;
    // console.log(props.question);

    const handleCheckRightAnswer = (index) => {
        if (correctAnswer === options[index]) {
            toast.success('Success: Right Answer', { autoClose: 1000 })
        }
        else {
            toast.error('Incorrect: Wrong Answer', { autoClose: 1000 })
        }

    }

    const handleCorrectAnswer = (correctAnswer) => {
        toast.success(correctAnswer, { autoClose: 1000 })
    }


    return (
        <div>
            <div className="grid grid-cols-4 mb-10">
                <div className="col-span-4 border bg-red-100 border-gray-400 p-6 rounded-lg">
                    <div className='flex justify-between items-center'>
                        <div className='text-orange-500 sm:text-xl text-lg text-start font-bold'>
                            Quiz {index + 1}: {question.replace(/(<([^>]+)>)/ig, '')}
                        </div>
                        <div className='md:px-6 px-2'>
                            <div className=" h-6 w-6 text-orange-500">
                                <EyeIcon onClick={() => handleCorrectAnswer(correctAnswer)} />
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            options.map((option, index) => <Option
                                key={index}
                                option={option}
                                index={index}
                                handleCheckRightAnswer={handleCheckRightAnswer}
                            ></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;