import React from 'react';

const ShopItem = ({ shop, number }) => {
  return (
    <li className="shop_item">
      {number} - {shop.name}
    </li>
  );
};

export default ShopItem;
