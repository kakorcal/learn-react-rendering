import React from 'react';

import NowPlayingDetails from './NowPlayingDetails';
import ProgressBar from './ProgressBar';
import PlaybackControls from './PlaybackControls';

const Tuner: React.FC = () => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <NowPlayingDetails>
        <ProgressBar />
        <PlaybackControls />
      </NowPlayingDetails>
    </div>
  );
};

const styles = () => {
  return {
    root: 'w-full rounded overflow-hidden sticky top-[5rem] self-start bg-slate-300 dark:bg-slate-700',
  };
};

export default Tuner;