import React from 'react';
import { useLoaderData } from "react-router-dom";
import Question from './Question';

const TopicDetails = () => {
    const loaderData = useLoaderData();
    const topicData = loaderData.data;
    // console.log(topicData);
    const { name, questions, total } = topicData;

    return (
        <div>
            <h2 className=' font-sans text-start sm:text-4xl text-2xl font-bold text-orange-400 mt-5 2xl:mx-36 xl:mx-24 lg:mx-16 md:mx-12 sm:mx-6 mx-4'>
                Quiz of {name}
            </h2>
            <div className="grid grid-cols-4 gap-5 my-6 2xl:mx-36 xl:mx-24 lg:mx-16 md:mx-12 sm:mx-6 mx-4">
                <div className="lg:col-span-3 col-span-4">
                    {
                        questions.map((question, index) => <Question
                            key={question.id}
                            question={question}
                            index={index}
                        ></Question>)
                    }
                </div>
                <div className=" lg:col-span-1 col-span-4 border bg-red-100 border-gray-400  h-52 p-6 rounded-lg">
                    <h2 className=' font-sans text-start text-2xl mb-2 font-bold text-orange-600'>Result</h2>
                    <div className=' font-sans text-start text-xl font-bold text-black mb-2'>
                        <p>Total Quiz: {total}</p>
                        <p>Correct: </p>
                        <p>Incorrect: </p>
                        <p>Score: </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopicDetails;