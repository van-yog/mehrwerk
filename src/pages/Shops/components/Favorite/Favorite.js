import imgFavorite from '../../../../assets/images/favorite.png';

const Favorite = () => {
  console.log('favorite');
  return <img className="favorite" src={imgFavorite} alt="favorite icon" />;
};

export default Favorite;
