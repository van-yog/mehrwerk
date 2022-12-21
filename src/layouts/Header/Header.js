import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header__conteiner">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
