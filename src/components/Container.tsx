import React from 'react';

const Navbar: React.FC = ({ children }) => {
  const classNames = navbarStyles();

  return (
    <div className={classNames.root}>
      {children}
    </div>
  );
};

const navbarStyles = () => {
  return {
    root: 'max-w-6xl mx-auto',
  };
};

const Main: React.FC = ({ children }) => {
  const classNames = mainStyles();

  return (
    <div className={classNames.root}>
      {children}
    </div>
  );
};

const mainStyles = () => {
  return {
    root: 'max-w-6xl mx-auto grid grid-cols-[5fr_2fr] gap-8',
  };
};

export default {
  Navbar,
  Main,
};
