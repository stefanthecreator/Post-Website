import React from "react";
import Post from "./Post";

function PostList({ posts, handleDeletePost }) {
  return (
    <div className="container">
      <div className="post-list">
        <Post posts={posts} handleDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default PostList;
