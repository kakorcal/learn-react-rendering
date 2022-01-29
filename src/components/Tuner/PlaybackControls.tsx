import React from 'react';

import { ReactComponent as Play } from '../../icons/play.svg';
import { ReactComponent as Pause } from '../../icons/pause.svg';
import { ReactComponent as Next } from '../../icons/next.svg';
import { ReactComponent as Previous } from '../../icons/previous.svg';

const PlaybackControls: React.FC = () => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <button className={classNames.button}>
        <Previous />
      </button>
      <button className={classNames.playButton}>
        <Play className={classNames.playIcon} />
      </button>
      <button className={classNames.button}>
        <Next />
      </button>
    </div>
  );
};

const styles = () => {
  return {
    root: 'flex justify-center items-center',
    playButton: 'min-w-[3rem] mx-1 relative text-slate-700 dark:text-slate-100 hover:text-orange-500 hover:dark:text-yellow-500 before:content-[" "] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:w-[2rem] before:h-[2rem] before:rounded-full before:bg-white before:dark:bg-black', 
    playIcon: 'relative',
    button: 'min-w-[3rem] mx-1 text-slate-700 dark:text-slate-100 hover:text-orange-500 hover:dark:text-yellow-500', 
  };
};

export default PlaybackControls;