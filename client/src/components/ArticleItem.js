import { Link } from "react-router-dom";
import { makeEmojiList } from "../utils";

function ArticleItem({ article }) {
  const { id, title, date, preview, minutes_to_read } = article;

  const emojis = makeEmojiList(minutes_to_read);

  return (
    <article key={id}>
      <h3>
        <Link to={`/articles/${id}`}>{title}</Link>
      </h3>
      <small>
        {date} • {emojis} {minutes_to_read} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticleItem;
