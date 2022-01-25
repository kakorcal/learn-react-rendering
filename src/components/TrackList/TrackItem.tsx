import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../redux';
import TrackPlayButton from './TrackPlayButton';

interface ITrackItemProps {
  id: string;
  trackPosition: number;
}

const TrackItem: React.FC<ITrackItemProps & ConnectedProps<typeof connector>> = ({
  trackPosition,
  art,
  title,
  artist,
  album,
  duration,
  url,
}) => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <div className={classNames.imageSection}>
        <img className={classNames.image} src={art} alt={title} />
        <div className={classNames.playButtonSection}>
          <TrackPlayButton />
        </div>
      </div>
      <div className={classNames.texts}>
        <div className={classNames.title}>
          <span className={classNames.trackPosition}>{`${trackPosition}. `}</span>
          <a href={url} target={'_blank'} rel={'noreferrer'}>{title}</a>
        </div>
        <div className={classNames.subtitle}><span>{artist}</span>{album && <span> • {album}</span>}</div>
      </div>
      <div className={classNames.duration}>{duration}</div>
    </div>
  );
};

const styles = () => {
  return {
    root: 'group flex items-center',
    imageSection: 'relative max-w-[4rem] mr-3',
    image: 'm-0 rounded overflow-hidden',
    playButtonSection: 'group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0 w-full h-full',
    contentSection: 'flex items-center w-full',
    texts: 'flex-1 flex flex-col justify-center',
    trackPosition: 'align-middle',
    title: 'text-lg',
    subtitle: 'text-sm',
    duration: 'text-sm',
  };
};

const connector = connect((state: State, ownProps: ITrackItemProps) => {
  return state.tracks.annotations[ownProps.id]; 
});

export default connector(TrackItem);