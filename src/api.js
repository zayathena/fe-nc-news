import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fam2.onrender.com/api",
});

export const fetchArticles = () => {
    return ncNewsApi.get(`/articles`).then(({ data }) => {
      return data.articles;
    });
  };

  export const fetchArticleCard = (articleCard) => {
    return marketplaceApi
      .get(`/articles/:article_id`, { params: { article_id: articleCard } })
      .then(({ data }) => {
        return data.articleCard;
      });
  };