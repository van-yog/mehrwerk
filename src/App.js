import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import './assets/styles/Main.scss';

const App = () => {
  return (
    <Layout>
      <RenderRoutes />
    </Layout>
  );
};

export default App;
