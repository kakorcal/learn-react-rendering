import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../redux';

import TrackFilterItem from './TrackFilterItem';

const TrackFilter: React.FC<ConnectedProps<typeof connector>> = ({ sortTypes }) => {
  return (
    <ul>
      {sortTypes.map((sortType) => <li><TrackFilterItem key={sortType} sortType={sortType} /></li>)}
    </ul>
  );
};

const connector = connect((state: State) => {
  return { 
    sortTypes: state.tracks.sortTypes,
  };
});

export default connector(TrackFilter);