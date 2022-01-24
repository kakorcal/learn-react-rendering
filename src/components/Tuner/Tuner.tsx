import React from 'react';

const Tuner: React.FC = () => {
  const classNames = styles();

  return <div className={classNames.root} />;
};

const styles = () => {
  return {
    root: 'w-full',
  };
};

export default Tuner;