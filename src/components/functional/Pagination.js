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

  return pageNumbers.length <= 1 ? null : (
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

// class Pagination extends Component {
//   render() {
//     if (!this.totalRecords || this.totalPages === 1) return null;

//     const { currentPage } = this.state;
//     const pages = this.fetchPageNumbers();

//     return (
//       <Fragment>
//         <nav aria-label="Countries Pagination">
//           <ul className="pagination">
//             {pages.map((page, index) => {
//               if (page === LEFT_PAGE)
//                 return (
//                   <li key={index} className="page-item">
//                     <a
//                       className="page-link"
//                       href="#"
//                       aria-label="Previous"
//                       onClick={this.handleMoveLeft}
//                     >
//                       <span aria-hidden="true">&laquo;</span>
//                       <span className="sr-only">Previous</span>
//                     </a>
//                   </li>
//                 );

//               if (page === RIGHT_PAGE)
//                 return (
//                   <li key={index} className="page-item">
//                     <a
//                       className="page-link"
//                       href="#"
//                       aria-label="Next"
//                       onClick={this.handleMoveRight}
//                     >
//                       <span aria-hidden="true">&raquo;</span>
//                       <span className="sr-only">Next</span>
//                     </a>
//                   </li>
//                 );

//               return (
//                 <li
//                   key={index}
//                   className={`page-item${
//                     currentPage === page ? " active" : ""
//                   }`}
//                 >
//                   <a
//                     className="page-link"
//                     href="#"
//                     onClick={this.handleClick(page)}
//                   >
//                     {page}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </Fragment>
//     );
//   }
// }

// class Pagination extends Component {
//   componentDidMount() {
//     this.gotoPage(1);
//   }

//   gotoPage = (page) => {
//     const { onPageChanged = (f) => f } = this.props;

//     const currentPage = Math.max(0, Math.min(page, this.totalPages));

//     const paginationData = {
//       currentPage,
//       totalPages: this.totalPages,
//       pageLimit: this.pageLimit,
//       totalRecords: this.totalRecords,
//     };

//     this.setState({ currentPage }, () => onPageChanged(paginationData));
//   };

//   handleClick = (page) => (evt) => {
//     evt.preventDefault();
//     this.gotoPage(page);
//   };

//   handleMoveLeft = (evt) => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
//   };

//   handleMoveRight = (evt) => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
//   };
// }
