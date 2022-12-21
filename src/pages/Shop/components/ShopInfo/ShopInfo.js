import LogoCompany from '../../../../components/LogoCompany';
import CashbackRates from '../CaschbackRates/CashbackRates';

const ShopInfo = ({ shop }) => {
  const { description, name, logo, cashbackRates, categories } = shop;

  const newDescription =
    description.length < 140 ? description : description?.slice(0, 140) + '...';

  return (
    <div className="shop_info">
      <div className="shop_info__logo_wrapper">
        <LogoCompany logoLink={logo} />
      </div>
      <h3 className="shop_info__title">{name}</h3>
      <p className="shop_info__description">{newDescription}</p>

      {!!cashbackRates.length && (
        <CashbackRates cashbackRates={cashbackRates} />
      )}

      <ul className="shop_info__categories">
        {categories.map(({ name }) => (
          <li className="shop_info__categories_item" key={name}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopInfo;
