import React from 'react';

import { ContainerType } from '../types';

const Header: React.FC = ({ children }) => {
  const classNames = styles('HEADER');

  return (
    <header className={classNames.root}>
      <div className={classNames.container}>
        {children}
      </div>
    </header>
  );
};

const Main: React.FC = ({ children }) => {
  const classNames = styles('MAIN');

  return (
    <main className={classNames.root}>
      <div className={classNames.container}>
        {children}
      </div>
    </main>
  );
};

const styles = (containerType: ContainerType) => {
  const containerStyles: { [key in ContainerType]: { [key: string]: string; } } = {
    'HEADER': {
      root: 'w-full sticky z-10 top-0 bg-blue-200 dark:bg-blue-800 transition-colors',
      container: 'max-w-6xl mx-auto',
    },
    'MAIN': {
      root: 'w-full py-12',
      container: 'max-w-6xl mx-auto grid grid-cols-[5fr_2fr] gap-8',
    },
  };

  return containerStyles[containerType];
};

export default {
  Header,
  Main,
};
