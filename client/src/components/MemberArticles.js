import { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";

const initialState = {
  articles: [],
  error: null,
  status: "pending",
};

function MemberArticles() {
  const [{ articles, error, status }, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
    fetch("/members_only_articles").then((r) => {
      if (r.ok) {
        r.json().then((articles) =>
          setState({ articles, error: null, status: "resolved" })
        );
      } else {
        r.json().then((message) =>
          setState({ articles: null, error: message.error, status: "rejected" })
        );
      }
    });
  }, []);

  if (status === "pending") return <h1>Loading...</h1>;

  if (status === "rejected") return <h1>{error}</h1>;

  return (
    <main>
      <h2>Member Only Articles</h2>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </main>
  );
}

export default MemberArticles;
