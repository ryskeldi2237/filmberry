import React from "react";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";

function Paginate({activePage, setActivePage}) {
  const handlePageChange = (event, page) => {
    setActivePage(page);
  };

  return (
    <div className="content__pagination">
      <Pagination
        count={10}
        color="secondary"
        size="large"
        page={activePage} 
        onChange={handlePageChange}
      />
    </div>
  );
}
Paginate.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default Paginate;