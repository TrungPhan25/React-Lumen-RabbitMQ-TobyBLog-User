import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import SliderBlog from "../../components/SliderBlog";
import SidebarBlog from "../../components/SidebarBlog";
import BlogContent from "../../components/BlogContent";
import BlogComment from "../../components/BlogComment";
import Meta from "../../components/Head/Meta";
import io from 'socket.io-client';

function BlogItem() {
  const { slug } = useParams();
  const [postItem, setPostItem] = useState({});
  const [author, setAuthor] = useState({});
  const [newComments, setNewComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [views, setViews] = useState(0);

  useEffect(() => {
    getItems(slug);
    console.log(slug);
    const socket = io('http://10.11.15.10:5000'); // Connect server Node.js

    socket.on(`newMessage.${slug}`, (message) => {
      setNewComments((prevNewComments) => [...prevNewComments, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const getItems = (slug) => {
    let url = `/user/post/show/${slug}`;

    axiosClient
      .get(url)
      .then((res) => {
        setPostItem(res.data.post);
        setAuthor(res.data.author);
        setComment(res.data.comments);
        setViews(res.data.views);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Meta title={postItem.title} description={postItem.summary} />
      <SliderBlog />
      <section className="section blog-wrap bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <BlogContent data={postItem} totalComments={comment.length} totalViews={views}/>
                <BlogComment data={comment} newComments={newComments} slugPost={slug}/>
              </div>
            </div>
            <SidebarBlog author={author} />
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogItem;
