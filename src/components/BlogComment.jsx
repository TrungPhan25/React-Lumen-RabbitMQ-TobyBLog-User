import CommentContent from "./Commet/CommentContent";
import axiosClient from "../axios-client";
import { useState } from "react";

function BlogComment({data, newComments, slugPost}) {
  const [errors, setErrors] = useState({});
  const comments = data;
  const [dataComment, setDataComment] = useState({
    name: '',
    email: '',
    comment: '',
    postSlug: ''
  });

  const submitComment = (e) => {
    dataComment.postSlug = slugPost;
    let url = '/user/comment';
    e.preventDefault();

    axiosClient.post(url, dataComment).then((res) => {
      setErrors({});
      setDataComment({
        name: '',
        email: '',
        comment: '',
        postSlug: ''
      });
    })
    .catch((error) => {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    });
  };

  return (
    <>
      <div className="col-lg-12 mb-5">
        <div className="comment-area card border-0 p-5">
          <h4 className="mb-4">Comments Here</h4>
          <ul className="comment-tree list-unstyled">
            {comments.map((comment, index) => (
                <CommentContent key={index} name={comment.name} comment={comment.comment} time={comment.created_at}/>
            ))}
            {newComments.map((comment, index) => (
                <CommentContent key={index} name={comment.name} comment={comment.comment} time={comment.created_at}/>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-lg-12">
        <form className="contact-form bg-white rounded p-5" onSubmit={submitComment} id="comment-form">
          <h4 className="mb-4">Write a comment</h4>
          {errors && (
              <div style={{ color: "red" }}>
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            )}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={dataComment.name}
                  onChange={(e) => setDataComment({...dataComment, name: e.target.value})}
                  id="name"
                  placeholder="Name:"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="mail"
                  value={dataComment.email}
                  onChange={(e) => setDataComment({...dataComment, email: e.target.value})}
                  id="mail"
                  placeholder="Email:"
                />
              </div>
            </div>
          </div>

          <textarea
            className="form-control mb-3"
            name="comment"
            id="comment"
            value={dataComment.comment}
            onChange={(e) => setDataComment({...dataComment, comment: e.target.value})}
            cols="30"
            rows="5"
            placeholder="Comment"
          ></textarea>

          <input
            className="btn btn-main btn-round-full"
            type="submit"
            name="submit-contact"
            id="submit_contact"
            value="Submit Message"
          />
        </form>
      </div>
    </>
  );
}

export default BlogComment;
