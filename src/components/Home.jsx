import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import education from "../assets/education.json";

const Home = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <div className='flex flex-col justify-between lg:flex-row'>
                <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <h2 className='max-w-lg lg:mt-24 mb-5 font-sans text-start text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl sm:leading-none'>
                            Test your brain with Quizo
                        </h2>
                        <p className='text-start font-medium text-gray-700 md:text-lg'>
                            Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.
                        </p>
                    </div>
                    <div className='flex flex-col justify-start sm:flex-row'>
                        <Link to='/topics'>
                            <button type="button" className="px-8 py-3 font-semibold rounded bg-orange-400 hover:bg-orange-600 text-gray-800 hover:text-white">Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className='relative lg:w-1/2 mb-72 sm:mb-64 md:mb-96 lg:mb-64'>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96'>
                        <Lottie animationData={education} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;