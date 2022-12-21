import React from 'react';
import useShops from '../../hooks/useShops';
import ShopCard from './components/ShopCard/ShopCard';
import Spinner from '../../components/Spinner';

const Shops = () => {
  const { shops, error } = useShops();

  return shops === undefined ? (
    <Spinner />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <div className="shops">
      <ul className="shops__list">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </ul>
    </div>
  );
};

export default Shops;
