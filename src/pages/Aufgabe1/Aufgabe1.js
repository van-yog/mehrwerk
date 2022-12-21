import Hero from '../../components/Hero';
import RequestInfo from './components/RequestInfo/RequestInfo';
import AccessToken from './components/AccessToken/AccessToken';

const Aufgabe1 = () => {
  return (
    <div className="aufgabe-1">
      <Hero
        title="Aufgabe 1:"
        text="Stelle eine Verbindung mit unserer API her und hole dir einen Service Account Token."
      />
      <RequestInfo />
      <AccessToken />
    </div>
  );
};

export default Aufgabe1;
