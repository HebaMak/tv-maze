import { useState } from "react";
import SingleShow from "./SingleShow";

const Pagination = ({ shows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 15;

  const indexOfLast = currentPage * showsPerPage;
  const indexOfFirst = indexOfLast - showsPerPage;
  const currentShows = shows.slice(indexOfFirst, indexOfLast);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(shows.length / showsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = (e) => {
    e.preventDefault();
    currentPage > 1 && currentPage <= pageNumbers.length
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(pageNumbers.length);
  };

  const nextPage = (e) => {
    e.preventDefault();
    currentPage >= 1 && currentPage < pageNumbers.length
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(1);
  };

  const handleCurrentPage = (e, number) => {
    e.preventDefault();
    setCurrentPage(number);
    e.target.classList.add("active_page");
  };

  return (
    <nav aria-label="Page navigation example pagination_page">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link prv_next" href="!#" onClick={prevPage}>
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className={
                number === currentPage ? "page-link active_page" : "page-link"
              }
              onClick={(e) => handleCurrentPage(e, number)}
            >
              {" "}
              {number}{" "}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link prv_next" href="!#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
      <div className="pagination_body">
        {currentShows.map((show) => (
          <SingleShow show={show} />
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
