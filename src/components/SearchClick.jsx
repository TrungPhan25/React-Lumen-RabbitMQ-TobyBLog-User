import { Link } from "react-router-dom";

function SearchClick({
  title,
  listSearch,
  handleGetCategoryName,
  handleSearch,
}) {
  const handleClick = (item) => {
    handleSearch(item);
  };

  return (
    <div className="sidebar-widget bg-white rounded tags p-4 mb-3">
      <h5 className="mb-4">{title}</h5>
      <Link to="" onClick={() => handleSearch("")}>
        Tất cả
      </Link>
      {listSearch.map((item, index) => (
        <Link
          to=""
          key={index}
          onClick={() => handleClick(item)}
          style={{ margin: "2px" }}
        >
          {handleGetCategoryName(item)}
        </Link>
      ))}
    </div>
  );
}

export default SearchClick;
