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
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <div className={classNames.titleSection}>
        <h2 className={classNames.title}>{name}</h2>
        <div className={classNames.filterSection}>
          <TrackFilter />
        </div>
      </div>
      <ol className={classNames.listSection}>
        {trackIds.map((trackId) => <li key={trackId}><TrackItem id={trackId} /></li>)}
      </ol>
    </div>
  );
};

const styles = () => {
  return {
    root: 'w-full',
    titleSection: 'flex justify-between items-center',
    title: 'm-0',
    filterSection: 'm-0',
    listSection: 'w-full',
  };
};

const connector = connect((state: State) => {
  return { 
    name: state.tracks.name,
    trackIds: state.tracks.ids,
  };
});

export default connector(TrackList);
