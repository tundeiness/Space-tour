/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
// import Header from '../../components/header';

const Home = () => {
  const test = 1;
  return (
    <div className="home container">
      {/* <Header /> */}
      <section className="row body-section">
        <div className="col-6 border-red body-section--message">
          <div className="body-section--message__wrapper">
            <h1 className="body-section--message__wrapper--heading uppercase letter-spacing-1">
              So, you want to travel to
              <span className="d-block fs-900 ff-serif text-white">Space</span>
            </h1>

            <p className="body-section--message__wrapper--description">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
              {' '}
            </p>
          </div>
        </div>
        <div className="col-6 body-section--explore-wrap border-red">
          <a
            href="/"
            className="body-section--explore-wrap__large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;


// .body-section--message,
// .body-section--message__wrapper,
// .body-section--message__wrapper--heading,
// body-section--message__wrapper--description,
// .body-section--explore,