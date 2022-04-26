import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState("");
  const [postStats, setPostStats] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    setPosts(data);
    setFiltered(data);
  };

  // Add a new post with a unique id
  const addPost = (newPost) => {
    newPost.id = uuidv4();
    setPosts([newPost, ...posts]);
  };

  // Delete the post
  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  // Set the search query from searchbox input value
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter the posts that should be displayed
  useEffect(() => {
    if (searchQuery)
      setFiltered(
        posts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        )
      );
    else setFiltered(posts);
  }, [searchQuery, posts]);

  // Result stats
  useEffect(() => {
    setPostStats(filtered.length);
  }, [filtered]);

  return (
    <>
      <Header title="The Posts Website" />
      <PostForm handleAddPost={addPost} />
      <SearchBox
        value={searchQuery}
        onChange={handleSearch}
        stats={postStats}
      />
      <PostList posts={filtered} handleDeletePost={deletePost} />
    </>
  );
}

export default App;
