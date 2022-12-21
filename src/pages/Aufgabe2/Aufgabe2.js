import React from 'react';
import Hero from '../../components/Hero';
import ShopsList from './components/ShopsList';

const Aufgabe2 = () => {
  return (
    <div className="aufgabe-2">
      <Hero
        title="Aufgabe 2:"
        text="Rufe über unsere API die Liste aller verfügbaren Shops ab.        "
      />
      <h3 className="aufgabe-2__response_title">Response:</h3>
      <ShopsList />
    </div>
  );
};

export default Aufgabe2;
