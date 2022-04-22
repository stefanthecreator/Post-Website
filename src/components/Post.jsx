import { FaTimes } from "react-icons/fa";
import React from "react";

function Post({ posts, handleDeletePost }) {
  posts = Array.from(posts);

  return (
    <div>
      {posts.map((post) => (
        <div className="card mb-2" key={post.id}>
          <button className="close" onClick={() => handleDeletePost(post.id)}>
            <FaTimes color="red" />
          </button>
          <div className="card-header" id={`heading${post.id}`}>
            <h2 className="mb-0">
              <button
                className="btn btn-block font-weight-bold text-left"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${post.id}`}
                aria-expanded="false"
                aria-controls={`collapse${post.id}`}
              >
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </button>
            </h2>
          </div>

          <div
            id={`collapse${post.id}`}
            className="collapse"
            aria-labelledby={`heading${post.id}`}
          >
            <div className="card-body">{post.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
