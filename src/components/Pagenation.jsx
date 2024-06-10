import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagenation = ({ pageCount, currentPage, handlePageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={handlePageChange}
      breakLabel="..."
      nextLabel="next >"
      previousLabel="< previous"
      containerClassName="pagination"
      activeClassName="active"
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      breakClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
    />
  );
};

export default Pagenation;
