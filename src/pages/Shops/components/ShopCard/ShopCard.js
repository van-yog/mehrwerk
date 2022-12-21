import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite';
import LogoCompany from '../../../../components/LogoCompany';

const ShopCard = ({ shop }) => {
  return (
    <li className="shop_card">
      <LogoCompany logoLink={shop.logo} />

      <div className="shop_card__info">
        <h2 className="shop_card__title">{shop.name}</h2>
        <NavLink className="shop_card__link" to={`/shops/${shop.id}`}>
          Go into shop{' '}
        </NavLink>
        {shop.isFavorite && <Favorite />}
      </div>
    </li>
  );
};

export default ShopCard;
