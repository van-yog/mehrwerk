import React from 'react';

const Hero = ({ title, text }) => {
  return (
    <div className="hero">
      <h1 className="hero__title">{title}</h1>
      <p className="hero__text">{text}</p>
    </div>
  );
};

export default Hero;
