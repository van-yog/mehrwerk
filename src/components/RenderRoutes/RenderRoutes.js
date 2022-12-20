import React from 'react';
import { Route, Routes } from 'react-router';
import routes from '../../routes';

const RenderRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
};

export default RenderRoutes;
