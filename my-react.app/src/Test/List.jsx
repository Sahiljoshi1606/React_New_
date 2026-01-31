import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [post, setPost] = useState([]);
  const [lodding, setLodding] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLodding(false);
      })
      .catch(() => {
        setError("Faild to load");
        setLodding(false);
      });
  }, []);
  if (lodding) return <h3>Lodding..</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h1>Post titles</h1>
      {post.map((post) => (
        <p key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </div>
  );
}

export default List;
