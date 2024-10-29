import React, { Children, createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext();

export const ArticlesProvider = ({children}) =>{
 const [yourArticles, setYourArticles] = useState([]);

 useEffect(() => {
   fetchArticles();
 }, []);

 const fetchArticles = () => {
   const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
   setYourArticles(savedArticles);
 };


  const deleteArticle = (id) => {
    const updatedArticles = yourArticles.filter((article) => article.id !== id);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    setYourArticles(updatedArticles);
  };

 return <ArticleContext.Provider value={{yourArticles,setYourArticles,deleteArticle,}}>
  {children}
 </ArticleContext.Provider>

}

export const useArticles = () =>{
 return useContext(ArticleContext);
}