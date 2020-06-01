import React from "react";

// Styles
import css from "./styles.module.scss";

const Search = ({setSearch}) => {

  return (
    <div className={css.search}>
      <input
        type="text"
        onChange={e => setSearch(e.target.value)}
        placeholder="Search events"
      />{" "}
    </div>
  );
};

export default Search;
