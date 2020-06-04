import React from "react";
import "./Pagination.scss";

const Pagination = ({
  perPage,
  totalItems,
  paginate,
  currentPage,
  previousButton,
  nextButton,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <ul className="pagination max-size='10">
          <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
            <button className="page-link" onClick={previousButton} href="#">
              &laquo;
            </button>
          </li>

          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item${currentPage === number ? "-active" : ""}`}
            >
              <button
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}

          <li
            className={`page-item${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? " disabled"
                : ""
            }`}
          >
            <button className="page-link" onClick={nextButton} href="#">
              &raquo;
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
