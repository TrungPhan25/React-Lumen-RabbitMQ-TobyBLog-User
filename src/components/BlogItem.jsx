import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";

const BlogItem = ({ imageUrl, category, title, content, link, updated_at }) => {
  const handleImage = (image, title) => {
    if (image) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`${process.env.REACT_APP_API_URL}/get-image/${image}`}
            alt={title}
            className="img-fluid rounded"
            style={{ height: "300px" }}
          />
        </div>
      );
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // tùy chọn này giúp cuộn mượt hơn
    });
  };

  const truncateContent = (content, maxLength) => {
    if (!content) return "";
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    } else {
      return content;
    }
  };

  return (
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        {handleImage(imageUrl, title)}
        <div className="blog-item-content bg-white p-4">
          <div className="blog-item-meta  py-1 px-2">
            <span className="text-muted text-capitalize mr-3">
              <div className="blog-item-meta bg-gray py-1 px-2">
                <span className="text-muted text-capitalize mr-3">
                  <i className="ti-pencil-alt mr-2"></i>
                  {category}
                </span>
                <span className="text-black text-capitalize mr-3">
                  <i className="ti-time mr-1"></i> {formatDate(updated_at)}
                </span>
              </div>
            </span>
          </div>
          <div style={{ height: "200px" }}>
            <h3 className="mt-3 mb-3">
              <Link onClick={scrollToTop} to={link}>
                {title}
              </Link>
            </h3>
            <p className="mb-4">{truncateContent(content, 100)}</p>
          </div>
          <Link
            to={link}
            onClick={scrollToTop}
            className="btn btn-small btn-main btn-round-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
