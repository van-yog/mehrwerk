import { useState } from 'react';
import imgNoLogo from '../../assets/images/no_logo.png';

const LogoCompany = ({ logoLink }) => {
  const [errorImg, setErrorImg] = useState(false);

  return errorImg ? (
    <div className="logo_company__no_logo">
      <img src={imgNoLogo} alt="no logo" />
    </div>
  ) : (
    <img
      className="logo_company__img"
      onError={() => setErrorImg(true)}
      src={logoLink}
      alt="shop"
    />
  );
};

export default LogoCompany;
