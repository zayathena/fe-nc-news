import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../api";
import loadingAnimation from '../assets/loadingAnimation.json'
import Lottie from "lottie-react"
import { Link } from "react-router";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (isError) {
    return <p>Error Returning Data</p>;
  }

  return (
    <>
          
        <h2>Welcome to the Homepage</h2>
      
      <ul className="aritcle-list">
        {articles.map((article) => {
          return (
            <ArticleCard key={article.article_id} article={article} />
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;