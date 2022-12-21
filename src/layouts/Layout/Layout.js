import React from 'react';
import Header from '../Header/Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__container">{children}</main>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
