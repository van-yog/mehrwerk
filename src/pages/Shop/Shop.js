import BackButton from './components/BackButton/BackButton';
import useShop from '../../hooks/useShop';
import Spinner from '../../components/Spinner';
import ShopInfo from './components/ShopInfo/ShopInfo';

const Shop = () => {
  const { shop, error } = useShop();

  return shop === undefined ? (
    <Spinner />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <div className="shop">
      <BackButton />
      <ShopInfo shop={shop} />
    </div>
  );
};

export default Shop;
