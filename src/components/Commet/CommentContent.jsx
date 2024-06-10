import { formatDate } from "../../utils/dateUtils"; 


function CommentContent({name, comment, time}) {
    return ( 
        <li className="mb-5">
              <div className="comment-area-box">
                <img
                  alt=""
                  src="images/blog/test1.jpg"
                  className="img-fluid float-left mr-3 mt-2"
                />

                <h5 className="mb-1">{name}</h5>
                {/* <span>United Kingdom</span> */}

                <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                  {/* <a href="#">
                    <i className="icofont-reply mr-2 text-muted"></i>
                    Reply |
                  </a> */}
                  <span className="date-comm">Posted {formatDate(time)} </span>
                </div>

                <div className="comment-content mt-3">
                  <p>
                    {comment}
                  </p>
                </div>
              </div>
            </li>
     );
}

export default CommentContent;