import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <>
      <Link to={`/articles?=${article.article_id}`}>
        <p className="article-list">{article.title}</p></Link>
        <p className="article-list">{article.body}</p>
        <p className="article-list">{article.topic}</p>
      
    </>
  );
}

export default ArticleCard;