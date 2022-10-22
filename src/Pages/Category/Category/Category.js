import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCardSummary from '../../Shared/NewsCardSummary/NewsCardSummary';


const Category = () => {

    const categoryNews = useLoaderData();
    return (
        <div>
            <h3>This is category: {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsCardSummary
                    key={news._id}
                    news={news}
                ></NewsCardSummary>)
            }
        </div>
    );
};

export default Category;