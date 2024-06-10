import "../css/blog-content.css";
import { formatDate } from "../utils/dateUtils";

function BlogContent({data, totalComments, totalViews}) {
  const { title, content, updated_at, category, tags, image } = data;
  const handleImage = (image, title) => {
    return (
      <div className="text-center">
        <img
          src={`${process.env.REACT_APP_API_URL}/get-image/${image}`}
          alt={title}
          className="img-fluid rounded"
          style={{ height: "300px" }}
        />
      </div>
    );
  };
  return (
    <>
      <div className="col-lg-12 mb-5">
        <div className="single-blog-item">
          {handleImage(image, title)}
          <div className="blog-item-content bg-white p-5">
            <div className="blog-item-meta bg-gray py-1 px-2">
              <span className="text-muted text-capitalize mr-3">
                <i className="ti-comment mr-2"></i>{totalComments} Comments
              </span>
              <span className="text-muted text-capitalize mr-3">
                <i className="ti-eye mr-2"></i>{totalViews} Views
              </span>
              <span className="text-black text-capitalize mr-3">
                <i className="ti-time mr-1"></i> {formatDate(updated_at)}
              </span>
            </div>
            <h2 className="mt-3 mb-4">
              <a href="">{title}</a>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <div className="tag-option mt-5 clearfix">
              <ul className="float-left list-inline">
                <li>Tags:</li>
                <li className="list-inline-item">
                  <a href="#" rel="tag">
                    Advancher
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" rel="tag">
                    Landscape
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" rel="tag">
                    Travel
                  </a>
                </li>
              </ul>

              <ul className="float-right list-inline">
                <li className="list-inline-item"> Share: </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank">
                    <i className="fab fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
