import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bharat = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '805466686dd64007b5ff56f689dbaafb';
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

    axios.get(url)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold text-white mb-6'>Latest News from TechCrunch</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {news.map((article, index) => (
          <li key={index} className='bg-gray-800 rounded-lg p-4'>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className='block text-white font-medium hover:underline'>
              {article.title}
            </a>
            <p className='text-gray-400 mt-2'>{article.description}</p>
            <div className='mt-4'>
              <span className='text-gray-500'>{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span className='text-gray-500 ml-2'>{article.source.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bharat;
