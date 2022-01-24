import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../redux';

interface ITrackItemProps {
  id: string;
}

const TrackItem: React.FC<ITrackItemProps & ConnectedProps<typeof connector>> = ({
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
      </div>
      <div className={classNames.contentSection}>
        <div className={classNames.texts}>
          <a className={classNames.title} href={url} target={'_blank'} rel={'noreferrer'}>{title}</a>
          <div className={classNames.subtitle}><span>{artist}</span>{album && <span> • {album}</span>}</div>
        </div>
        <div className={classNames.duration}>{duration}</div>
      </div>
    </div>
  );
};

const styles = () => {
  return {
    root: 'flex items-center',
    imageSection: 'max-w-[4rem]',
    image: 'm-0 rounded overflow-hidden',
    contentSection: 'flex items-center w-full ml-2',
    texts: 'flex-1 flex flex-col justify-center',
    title: 'text-lg',
    subtitle: 'text-sm',
    duration: 'text-sm',
  };
};

const connector = connect((state: State, ownProps: ITrackItemProps) => {
  return state.tracks.annotations[ownProps.id]; 
});

export default connector(TrackItem);