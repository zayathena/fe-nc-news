import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <>
    <div className="article-background">
    <Link to={`/articles/${article.article_id}`}>
        <p className="article-title">{article.title}</p></Link>
        <img
            className="article-image"
            src={article.article_img_url}
            alt={article.article_id}
          />
        <p className="article-topic">{article.topic}</p>
        <p className="article-body">{article.body}</p>
        </div>
        

    </>
  );
}

export default ArticleCard;