import React, { useContext } from 'react';
import { TopicsContext } from '../layouts/Main';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Statistics = () => {
    const topics = useContext(TopicsContext);
    // console.log(topics);
    return (
        <div>
            <h2 className=' font-sans text-start sm:text-4xl text-2xl font-bold text-orange-400 mt-5 2xl:mx-36 xl:mx-24 lg:mx-16 md:mx-12 sm:mx-6 mx-4'>
                Quiz Statistics
            </h2>
            <h4 className='font-sans text-start text-xl font-bold text-orange-400 mt-5 2xl:mx-36 xl:mx-24 lg:mx-16 md:mx-12 sm:mx-6 mx-4'>
                <BarChart width={600} height={300} data={topics}>
                    <XAxis dataKey="name" stroke="#e27602" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#e27602' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #e27602', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#e27602" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#e27602" barSize={30} />
                </BarChart>
            </h4>
        </div>
    );
};

export default Statistics;