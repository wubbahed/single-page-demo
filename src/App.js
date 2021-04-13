import React, { useState } from "react";
import Home from "./pages/Home";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [page, setPage] = useState("");

  let content = <Home />;
  if (page === "section1") {
    content = <Section1 />;
  } else if (page === "section2") {
    content = <Section2 />;
  } else if (page === "section3") {
    content = <Section3 />;
  }

  return (
    <div>
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button className="navbar-item button" onClick={() => setPage("")}>
            Home
          </button>
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample button is-outlined"
            onClick={() => setNavOpen(!navOpen)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${navOpen ? "is-active" : ""}`}>
          <div className="navbar-start">
            <button
              className="navbar-item button is-warning"
              onClick={() => setPage("section1")}>
              Section 1
            </button>
            <button
              className="navbar-item button is-info"
              onClick={() => setPage("section2")}>
              Section 2
            </button>
            <button
              className="navbar-item button is-primary"
              onClick={() => setPage("section3")}>
              Section 3
            </button>
          </div>
        </div>
      </div>

      {content}
    </div>
  );
};

export default App;
