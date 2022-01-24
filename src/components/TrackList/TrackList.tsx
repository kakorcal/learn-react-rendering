// import React from 'react';

// const List: React.FC = ({ children }) => {
//   return (
//     <ul>
//       {React.Children.map(children, (child) => {
//         return (
//           <li>{child}</li>
//         );
//       })}
//     </ul>
//   );
// };

// export default List;

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../redux';
import TrackItem from './TrackItem';
import TrackFilter from './TrackFilter';

const TrackList: React.FC<ConnectedProps<typeof connector>> = ({ name, trackIds }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h2>{name}</h2>
        <div>
          <TrackFilter />
        </div>
      </div>
      <ul>
        {trackIds.map((trackId) => <li><TrackItem key={trackId} id={trackId} /></li>)}
      </ul>
    </div>
  );
};

const connector = connect((state: State) => {
  return { 
    name: state.tracks.name,
    trackIds: state.tracks.ids,
  };
});

export default connector(TrackList);
