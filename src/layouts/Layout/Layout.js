import React from 'react';
import Header from '../Header/Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">{children}</div>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
