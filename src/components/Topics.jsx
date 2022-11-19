import React from 'react';
import { useContext } from 'react';
import { TopicsContext } from '../layouts/Main';
import Topic from './Topic';

const Topics = () => {
    const topics = useContext(TopicsContext);
    // console.log(topics);
    return (
        <div>
            <h2 className=' font-sans text-center sm:text-4xl text-2xl font-bold text-orange-400 mt-6'>
                Select your topic to test your knowledge on Quizo
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 2xl:mx-40 2xl:mb-36 xl:mb-36 xl:mx-10 xl:gap-10 lg:mx-20 md:mx-28 sm:mx-40 mx-10'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic} />)
                }
            </div>
        </div>
    );
};

export default Topics;