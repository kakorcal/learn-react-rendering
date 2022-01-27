import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ReactComponent as Sun } from '../icons/sun.svg';
import { ReactComponent as Moon } from '../icons/moon.svg';

import { actions } from '../redux';
import { Theme } from '../types';

const Navbar: React.FC<ConnectedProps<typeof connector>> = ({ tune }) => {
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

    tune('TtqTG6');
  }, [theme, tune]);

  return (
    <nav className={classNames.root}>
      <div className={classNames.logo}>SXM+P</div>
      <button className={classNames.themeButton} type='button' onClick={() => setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')}>
        {theme === 'LIGHT' ? <Sun className={classNames.sunIcon} /> : <Moon className={classNames.moonIcon} />}
      </button>
    </nav>
  );
};

const styles = () => {
  return {
    root: 'flex justify-between py-3',
    logo: 'text-3xl font-bold',
    themeButton: 'min-w-[2rem]',
    sunIcon: 'fill-orange-500',
    moonIcon: 'fill-yellow-500',
  };
};

const connector = connect(null, {
  tune: actions.playback.tune,
});

export default connector(Navbar);
