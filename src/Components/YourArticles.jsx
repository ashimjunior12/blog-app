import { Card } from '@/components/ui/card';
import { useArticles } from './ArticleContext/articleContext';
import { Button } from '@/components/ui/button';
import '../Components/Preview.css';
import React, { useState } from 'react';

const YourArticles = () => {
  const { yourArticles, deleteArticle } = useArticles();
  const [expandedArticleId, setExpandedArticleId] = useState(null); 

  const toggleReadMore = (id) => {
    setExpandedArticleId(expandedArticleId === id ? null : id); 
  };

  return (
    <>
      <h3 className='text-center w-4/5 my-0 mx-auto pt-10 font-mono capitalize text-3xl'>
        Your Articles <hr />
      </h3>
      <section className='flex flex-col gap-8 lg:grid grid-cols-2 w-4/5 my-0 mx-auto pt-10 pb-10'>
        {yourArticles.map((article) => (
          <Card key={article.id} className='preview p-8'>
            <div>
              {expandedArticleId === article.id ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content.substring(0, 200) + '.......',
                  }}
                />
              )}
            </div>
            
              <button
                className='mt-6 text-blue-500 hover:underline'
                onClick={() => toggleReadMore(article.id)}
              >
                {expandedArticleId === article.id ? 'Read Less' : 'Read More'}
              </button> <br />
              <Button
                className='mt-6 bg-red-600'
                onClick={() => deleteArticle(article.id)}
              >
                Delete Article
              </Button>
            
          </Card>
        ))}
      </section>
    </>
  );
};

export default YourArticles;
