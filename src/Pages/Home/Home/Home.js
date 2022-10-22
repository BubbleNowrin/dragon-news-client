import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCardSummary from '../../Shared/NewsCardSummary/NewsCardSummary';

const Home = () => {

    const allNews = useLoaderData();
    return (
        <div>
            <h3>This is home: {allNews.length}</h3>
            {
                allNews.map(news => <NewsCardSummary key={news._id} news={news}>
                </NewsCardSummary>)
            }
        </div>
    );
};

export default Home;