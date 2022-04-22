import React from "react";

function SearchBox({ value, onChange, stats }) {
  return (
    <div className="container">
      <div className="form-group row d-flex align-items-center px-4">
        <label
          htmlFor="search-box"
          className="col-lg-2 col-form-label col-form-label-lg"
        >
          Search Post
        </label>
        <div className="col-lg-10">
          <input
            type="text"
            className="search-input form-control form-control-lg"
            id="search-box"
            placeholder="Search the title of the post"
            name="query"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
        <div className="text-right px-4 col-12">
          {stats !== 0
            ? `${stats} posts found`
            : "No posts found with this title"}
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
