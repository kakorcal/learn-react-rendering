import React from 'react';

const ProgressBar: React.FC = () => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <div className={classNames.currentTime}>{'00:00'}</div>
      <div className={classNames.progressSection}>
        <div className={classNames.duration} />
        <div className={classNames.currentProgress} />
        {/* <div className={classNames.loading} /> */}
      </div>
      <div className={classNames.endTime}>{'03:00'}</div>
    </div>
  );
};

const styles = () => {
  return {
    root: 'w-full flex',
    currentTime: 'text-xs mr-3',
    endTime: 'text-xs ml-3',
    progressSection: 'relative flex-1 flex items-center',
    duration: 'absolute w-full h-full max-h-[0.5rem] bg-slate-400 dark:bg-slate-300 rounded overflow-hidden',
    currentProgress: 'absolute w-[10%] h-full max-h-[0.5rem] bg-slate-600 dark:bg-slate-500 rounded overflow-hidden',
    loading: 'absolute animate-loading h-full max-h-[0.5rem] bg-orange-500 dark:bg-yellow-500 rounded overflow-hidden',
  };
};

export default ProgressBar;