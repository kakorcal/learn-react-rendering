import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { ReactComponent as VolumeMute } from '../../icons/volume-mute.svg';
import { ReactComponent as VolumeOn } from '../../icons/volume-on.svg';

import { State } from '../../redux';

interface IVolumeControlProps extends ConnectedProps<typeof connector> {}

const VolumeControl: React.FC<IVolumeControlProps> = ({ volume }) => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <div className={classNames.section}>
        <VolumeMute className={classNames.volumeMuteIcon} />
        <input className={classNames.input} type={'range'} value={volume} min={0} max={100} />
        <VolumeOn className={classNames.volumeOnIcon} />
      </div>
    </div>
  );
};

const styles = () => {
  return {
    root: 'w-full min-h-[2rem] flex justify-center items-center',
    section: 'w-[98%] flex justify-center items-center',
    input: 'inputRange flex-1',
    volumeMuteIcon: 'max-h-[2rem] mr-3',
    volumeOnIcon: 'max-h-[2rem] ml-3',
  };
};

const connector = connect((state: State) => {
  return {
    volume: state.playback.volume,
  };
});

export default connector(VolumeControl);