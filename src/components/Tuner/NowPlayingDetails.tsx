import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../redux';
import Image from '../Image';

interface INowPlayingDetailsProps extends ConnectedProps<typeof connector> {}

const NowPlayingDetails: React.FC<INowPlayingDetailsProps> = ({ title, artist, album, art, url, children }) => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <Image className={classNames.image} src={art} alt={title} />
      <div className={classNames.contentSection}>
        <h2 className={classNames.title}>
          <a href={url} target={'_blank'} rel={'noreferrer'}>{title}</a>
        </h2>
        <div className={classNames.subtitle}><span>{artist}</span>{album && <span> • {album}</span>}</div>
        <div className={classNames.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

const styles = () => {
  return {
    root: 'w-full',
    contentSection: 'w-full grid gap-1 p-3',
    title: 'm-0 text-2xl',
    subtitle: 'm-0 text-base',
    image: 'w-full m-0',
    children: 'mt-5 grid gap-2',
  };
};

const connector = connect((state: State) => {
  const nowPlaying = state.playback.id;
  const track = nowPlaying ? state.tracks.annotations[nowPlaying] : state.tracks.annotations[state.tracks.ids[0]];

  return track;
});

export default connector(NowPlayingDetails);