import React from 'react';

const Container: React.FC = ({ children }) => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      {children}
    </div>
  );
};

const styles = () => {
  return {
    root: 'max-w-5xl mx-auto',
  };
};

export default Container;
