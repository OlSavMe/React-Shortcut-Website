import React from "react";
import "./Pagination.scss";

const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalItems / props.perPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers.length <= 1 ? null : (
    <>
      <div className="pagination-container row justify-content-center align-items-center">
        <ul className="pagination max-size='10">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.paginate(pageNumbers[0])}
              href="#"
            >
              {" "}
              {pageNumbers[0]}
            </button>
          </li>
          <li
            className={`page-item${props.currentPage === 1 ? " disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={props.previousButton}
              href="#"
            >
              {"<"}
            </button>
          </li>

          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item${
                props.currentPage === number ? "-active" : ""
              }`}
            >
              <button
                onClick={() => props.paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}

          <li
            className={`page-item${
              props.currentPage === pageNumbers[pageNumbers.length - 1]
                ? " disabled"
                : ""
            }`}
          >
            <button className="page-link" onClick={props.nextButton} href="#">
              {">"}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                props.paginate(pageNumbers[pageNumbers.length - 1])
              }
              href="#"
            >
              {pageNumbers[pageNumbers.length - 1]}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
