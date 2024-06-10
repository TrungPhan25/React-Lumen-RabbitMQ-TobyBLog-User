import React from "react";
import { Helmet } from "react-helmet-async";
import { JsonLd } from "react-schemaorg";
import { helmetJsonLdProp } from "react-schemaorg";

function Meta({ title }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting", // Ví dụ loại từ Schema.org
    name: "TobyBlog.", // Tên trang web
    url: "https://tobyblog.click", // URL trang web
    author: {
      "@type": "Organization", // Loại tác giả là tổ chức
      name: "Trung Phan", // Tên tổ chức sở hữu trang web
    },
    description:
      "Trang web chia sẽ kiến thức về lập trình web và công cụ tiện ích", // Mô tả trang web
    mainEntity: [
      // Mảng các bài viết hoặc chủ đề chính
      {
        "@type": "Article", // Loại nội dung là bài viết
        headline: "Senimar - Setup Lumen trên AWS", // Tiêu đề bài viết 1
        url: "https://tobyblog.click/blog-single/setup-apache-nginx-on-aws", // URL bài viết 1
        // ... các thuộc tính khác cho bài viết 1
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Trang web chia sẽ kiến thức về lập trình web và công cụ tiện ích"
        />
        <meta name="keywords" content="develop, web, AWS" />
      </Helmet>
      <Helmet
        script={[
          helmetJsonLdProp(schemaData), // Thêm Schema.org vào trang web
        ]}
      />
    </>
  );
}

export default Meta;
