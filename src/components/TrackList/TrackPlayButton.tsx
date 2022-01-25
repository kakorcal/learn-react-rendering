import React from 'react';

import { ReactComponent as Play } from '../../icons/play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import eq from '../../icons/eq.gif';

const TrackPlayButton: React.FC = () => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <button className={classNames.iconSectionEq}>
        {/* <Pause className={classNames.icon} /> */}
        <img className={classNames.eq} src={eq} alt="eq" />
      </button>
    </div>
  );
};

const styles = () => {
  return {
    root: 'relative w-full h-full grid place-items-center',
    iconSection: 'min-w-[3rem] before:content-[" "] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:w-[2rem] before:h-[2rem] before:rounded-full before:bg-black',
    iconSectionEq: 'grid place-items-center min-w-[3rem] before:content-[" "] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:w-[2rem] before:h-[2rem] before:rounded-full before:bg-slate-100',
    eq: 'relative m-0 max-w-[1rem]',
    icon: 'relative fill-slate-100',
  };
};

export default TrackPlayButton;
