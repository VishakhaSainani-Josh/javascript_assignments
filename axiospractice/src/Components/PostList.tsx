/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState<any>([]);

  async function getPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  }

  useEffect(() => {
    console.log("axios fetching data");
    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: 11,
        id: 101,
        title: "my title",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      })
      .then((res) => setPosts([...posts, res.data]));
  };

  return (
    <div>
      <h2>Posts </h2>
      <ul>
        <button type="submit" onClick={handlePost}>
          click to add
        </button>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
