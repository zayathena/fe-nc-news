import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fam2.onrender.com/api",
});

export const fetchArticles = () => {
    return ncNewsApi.get(`/articles`).then(({ data }) => {
      return data.articles;
    });
  };

export const fetchArticleCard = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}`).then(({ data }) => {
      return data.article;
    });
  };