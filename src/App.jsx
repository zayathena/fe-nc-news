import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
