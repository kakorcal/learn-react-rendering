import React from 'react';

const Navbar: React.FC = () => {
  const classNames = styles();

  return (
    <nav className={classNames.root}>SXM+P</nav>
  );
};

const styles = () => {
  return {
    root: 'text-3xl py-3',
  };
};

export default Navbar;