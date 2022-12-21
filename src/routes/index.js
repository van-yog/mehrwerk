import React from 'react';
import MaingPage from '../pages/MaingPage';
import Shops from '../pages/Shops';
import Shop from '../pages/Shop';
import Aufgabe1 from '../pages/Aufgabe1';
import Aufgabe2 from '../pages/Aufgabe2';
import NotFoundPage from '../pages/NotFoundPage';

const routes = [
  { path: '/', component: <MaingPage /> },
  { path: '/shops', component: <Shops /> },
  { path: '/aufgabe-1', component: <Aufgabe1 /> },
  { path: '/aufgabe-2', component: <Aufgabe2 /> },
  { path: '/shops/:id', component: <Shop /> },
  { path: '*', component: <NotFoundPage /> },
];

export default routes;
