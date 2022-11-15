import { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then(setArticles);
  }, []);

  return (
    <main>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </main>
  );
}

export default Home;
