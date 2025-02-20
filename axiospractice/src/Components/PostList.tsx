import React, { useEffect, useState } from "react";
import axios from "axios";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<post[]>([]);

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("axios fetching data");
    getPosts();
  }, []);

  const handlePost = () => {
    const payload = {
      userId: 11,
      title: "my title",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", payload)
      .then((res) => setPosts([...posts, res.data]));
  };

  return (
    <div>
      <h2>Posts </h2>
      <ul>
        <button type="submit" onClick={handlePost}>
          click to add
        </button>
        {posts.map((post: post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
