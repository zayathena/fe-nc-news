import { useEffect, useState } from "react";
import FancyBox from './FancyBox';
import { fetchArticles } from "../api";
import loadingAnimation from '../assets/loadingAnimation.json'
import Lottie from "lottie-react"


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

        <ul className="articles-ul-list">
        {articles.map((article) => (
          <li key={article.article_id}>
            <FancyBox article={article} />
          </li>
        ))}
      </ul>

    </>
  );
}

export default ArticleList;