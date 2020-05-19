import React from "react";

// Styles
import css from "./styles.module.scss";

const Search = () => {
  return (
    <div className={css.search}>
      <input type="text" placeholder="Search events" />{" "}
    </div>
  );
};

export default Search;
