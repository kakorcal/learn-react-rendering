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
  return (
    <div>
      <div>
        <img src={art} alt={title} />
      </div>
      <div>
        <div><a href={url} target={'_blank'} rel={'noreferrer'}>{title}</a></div>
        <div>
          <span>{artist}</span>{album && <span> • {album}</span>}
        </div>
      </div>
      <div>
        <span>{duration}</span>
      </div>
    </div>
  );
};

// const classNames = () => {
//   return {

//   };
// };

const connector = connect((state: State, ownProps: ITrackItemProps) => {
  return state.tracks.annotations[ownProps.id]; 
});

export default connector(TrackItem);