import React, { useState } from "react";

function SearchItem({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    handleSearch(searchValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="sidebar-widget search card p-4 mb-3 border-0">
      <input
        value={searchValue}
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="form-control"
        placeholder="search"
      />
      <button
        className="btn btn-mian btn-small d-block mt-2"
        style={{ width: "100%" }}
        onClick={onSearch}
      >
        search
      </button>
    </div>
  );
}

export default SearchItem;
