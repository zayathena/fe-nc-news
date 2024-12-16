import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import Article from './components/Article';
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Article />}></Route>
      <Route path={"/articles/:article_id"} element={<ArticleCard />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
