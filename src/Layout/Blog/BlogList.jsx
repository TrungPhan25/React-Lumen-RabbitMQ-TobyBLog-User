import React, { useEffect, useState } from "react";
import SliderBlog from "../../components/SliderBlog";
import SidebarBlog from "../../components/SidebarBlog";
import BlogItem from "../../components/BlogItem";
import axiosClient from "../../axios-client";
import Pagenation from "../../components/Pagenation";
import SearchItem from "../../components/SearchItem";
import SearchClick from "../../components/SearchClick";
import LatestPosts from "../../components/LatestPosts";
import Meta from "../../components/Head/Meta";

function BlogList() {
  const [postItems, setPostItems] = useState([{}]);
  const [categories, setCategories] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  const [categoriesExits, setCategoriesExits] = useState([]);
  const [latestPosts, setLatestPosts] = useState([{}]);

  useEffect(() => {
    getBlogItems();
  }, []);

  const getBlogItems = (
    page = currentPage,
    search = null,
    searchCategory = null
  ) => {
    let url = `/user/post?page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    if (searchCategory) {
      url += `&category=${searchCategory}`;
    }
    axiosClient.get(url).then((res) => {
      setPostItems(res.data.posts.data);
      setCategories(res.data.categories);
      setPageCount(res.data.posts.last_page);
      setCurrentPage(res.data.posts.current_page);
      setCategoriesExits([
        ...new Set(res.data.uniqueCategoryIds.map((post) => post.category_id)),
      ]);
      setLatestPosts(res.data.latestPosts);
    });
  };

  const handleGetCategoryName = (id) => {
    let category = categories.find((category) => category.id === id);
    return category ? category.title : "";
  };

  const handlePageChange = (selectedItem) => {
    const newPage = selectedItem.selected + 1;
    setCurrentPage(newPage);
    getBlogItems(newPage);
  };

  const handleSearch = (value) => {
    getBlogItems(null, value, null);
  };

  const searchCategory = (value) => {
    getBlogItems(null, null, value);
  };

  return (
    <>
      <Meta title="TobyBlog" />
      <SliderBlog />
      <section className="section blog-wrap bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {postItems.map((item, index) => (
                  <BlogItem
                    key={index}
                    imageUrl={item.image}
                    category={handleGetCategoryName(item.category_id)}
                    title={item.title}
                    content={item.summary}
                    link={`/blog-single/${item.slug}`}
                    updated_at={item.updated_at}
                  />
                ))}
              </div>
              <Pagenation
                pageCount={pageCount}
                currentPage={currentPage - 1}
                handlePageChange={handlePageChange}
              />
            </div>
            <div className="col-lg-4">
              <div className="sidebar-wrap">
                <SearchItem handleSearch={handleSearch} />
                <SearchClick
                  title="Danh mục"
                  listSearch={categoriesExits}
                  handleGetCategoryName={handleGetCategoryName}
                  handleSearch={searchCategory}
                />
                <LatestPosts posts={latestPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;
