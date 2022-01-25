import React from 'react';

import { ReactComponent as Sun } from '../icons/sun.svg';
import { ReactComponent as Moon } from '../icons/moon.svg';

import { Theme } from '../types';

const Navbar: React.FC = () => {
  const classNames = styles();
  const [theme, setTheme] = React.useState<Theme>('DARK');

  React.useEffect(() => {
    if (theme === 'LIGHT') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <nav className={classNames.root}>
      <div className={classNames.logo}>SXM+P</div>
      <button className={classNames.themeButton} type='button' onClick={() => setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')}>
        {theme === 'LIGHT' ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

const styles = () => {
  return {
    root: 'flex justify-between py-3',
    logo: 'text-3xl font-bold',
    themeButton: 'min-w-[2rem]',
  };
};

export default Navbar;