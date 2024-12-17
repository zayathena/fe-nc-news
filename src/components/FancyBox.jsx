import ArticleCard from "./ArticleCard";

const FancyBox = ({ article }) => {
    return (
        <div className="fancy-box">
        <ArticleCard article={article} />
        </div>
    )
}

export default FancyBox;