import React from "react";

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="conatainer">
          <div className="title is-1">Welcome to Home</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sodales magna turpis, posuere molestie libero varius vitae. Morbi
            dignissim felis pharetra pellentesque blandit. Sed scelerisque magna
            sit amet risus fringilla luctus eu ac leo. Nulla maximus ultrices
            volutpat. Vestibulum quis dui eget dui lobortis eleifend et
            tristique urna. Suspendisse sit amet elit vel mi finibus euismod at
            eget risus. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. In condimentum eros tellus, in
            porttitor tellus rutrum et. Phasellus placerat non dolor id
            dignissim. Nullam in leo eu nunc consequat mattis. In volutpat
            pellentesque turpis, vitae vulputate nulla vestibulum vitae. Donec
            hendrerit sodales ante quis placerat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="conatainer">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title">Vertical...</p>
                    <p className="subtitle">Top tile</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">...tiles</p>
                    <p className="subtitle">Bottom tile</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Middle tile</p>
                    <p className="subtitle">With an image</p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">Wide tile</p>
                  <p className="subtitle">Aligned with the right tile</p>
                  <div className="content"></div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Tall tile</p>
                  <p className="subtitle">With even more content</p>
                  <div className="content"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
