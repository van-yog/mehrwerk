import React from 'react';
import Hero from '../../components/Hero';

const MainPage = () => {
  return (
    <div className="main_page">
      <Hero
        title="Welcome to the main page"
        text="Below is a short video presentation that will introduce you to me and my application."
      />
      <div className="main_page__link_wrapper">
        <a
          className="main_page__link"
          href="https://www.loom.com/share/2b45bb3d8f3942098ff3bed3bf151bfc"
          rel="noopener noreferrer"
        >
          https://www.loom.com/share/2b45bb3d8f3942098ff3bed3bf151bfc
        </a>
      </div>
    </div>
  );
};

export default MainPage;
