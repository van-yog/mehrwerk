import React from 'react';
import useShops from '../../../../hooks/useShops';
import Spinner from '../../../../components/Spinner';
import ShopItem from '../ShopItem/ShopItem';

const ShopsList = () => {
  const { shops, error } = useShops();
  return shops === undefined ? (
    <Spinner />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <ul className="shops_list">
      {shops.map((shop, index) => (
        <ShopItem key={shop.id} shop={shop} number={index + 1} />
      ))}
    </ul>
  );
};

export default ShopsList;
