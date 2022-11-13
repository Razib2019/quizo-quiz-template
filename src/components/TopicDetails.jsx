import React from 'react';
import { useLoaderData } from "react-router-dom";

const TopicDetails = () => {
    const loaderData = useLoaderData();
    const topicData = loaderData.data;
    const { name, total, questions } = topicData;
    console.log(topicData);
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default TopicDetails;