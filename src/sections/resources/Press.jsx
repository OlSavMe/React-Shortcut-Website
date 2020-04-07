import React from "react";
import css from "./Press.module.scss";
import { Nav, Footer } from "../../components/index.jsx";

export default function Press() {
  return (
    <div>
      <Nav />
      <div className={css.container}></div>
      <Footer />
    </div>
  );
}
