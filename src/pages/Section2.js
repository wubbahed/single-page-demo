import React from "react";

const Section2 = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="title is-1">Section 2</div>
          <article className="panel is-info">
            <p className="panel-heading">Info</p>
            <p className="panel-tabs">
              <a className="is-active">All</a>
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
            </p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input is-info"
                  type="text"
                  placeholder="Search"
                />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              bulma
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              minireset.css
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              jgthms.github.io
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Section2;
