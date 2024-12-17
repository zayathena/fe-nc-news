import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticleCard } from "../api";
import loadingAnimation from '../assets/loadingAnimation.json'
import Lottie from "lottie-react"

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchArticleCard(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (isError) return <p>Error loading the article.</p>;

  return (
    <div className="single-article">
      <h1 className="single-article-title">{article.title}</h1>
      <img className="article-img" src={article.article_img_url} alt={article.title} />
      <p className="single-article-topic">{article.topic}</p>
      <p className="single-article-body">{article.body}</p>
    </div>
  );
}

export default Article;