import { display } from "@mui/system";
import React from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="paginationbox">
        <ul className="pagination" id="list">
          {pageNumbers.map((number) => (
            <li key={number} id="listitem1">
              <h1 id="num" onClick={() => paginate(number)}>{number}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Pagination;
