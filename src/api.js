import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fam2.onrender.com/api",
});

export const fetchArticles = () => {
    return ncNewsApi.get(`/articles`).then(({ data }) => {
      return data.articles;
    });
  };

export const fetchArticleCard = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
      return data.article;
    });
  };

export const fetchComments = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
      return data;
    });
  };  