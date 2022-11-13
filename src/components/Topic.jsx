import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-400" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">This quiz contains some questions and there is no time limit. It's just a nice way to see how much you know about this topic.</p>
                </div>
            </div>
            <div className="flex flex-col max-w-lg justify-between p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div className="flex flex-wrap justify-between items-center">
                    Total Quiz: {total}

                    <div className="space-x-2">
                        <Link to={`quiz/${id}`}>
                            <button type="button" className="flex justify-between items-center w-full p-2 font-semibold tracking-wide rounded-md dark:bg-gray-400 dark:text-gray-900 hover:bg-orange-600 hover:text-white">Start Practice</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;