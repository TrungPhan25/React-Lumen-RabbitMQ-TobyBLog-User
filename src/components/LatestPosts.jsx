import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";

function LatestPosts({ posts }) {
  const handleImage = (image, title) => {
    if (image) {
      return (
        <img
          className="mr-4"
          src={`${process.env.REACT_APP_API_URL}/get-image/${image}`}
          alt={title}
          style={{ width: "100px" }}
        />
      );
    }
  };
  const formattedDate = (updatedAt) => {
    return formatDate(updatedAt);
  };

  return (
    <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
      <h5>Latest Posts</h5>

      {posts.map((post, index) => (
        <div className="media border-bottom py-3" key={index}>
          <Link to={`/blog-single/${post.slug}`} href="#">
            {handleImage(post.image, post.title)}
          </Link>
          <div className="media-body">
            <h6 className="my-2">
              <Link to={`/blog-single/${post.slug}`}>{post.title}</Link>
            </h6>
            <span className="text-sm text-muted">
              {formattedDate(post.updated_at)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestPosts;
