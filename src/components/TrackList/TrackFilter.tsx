import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../redux';

import TrackFilterItem from './TrackFilterItem';

const TrackFilter: React.FC<ConnectedProps<typeof connector>> = ({ sortTypes, currentSortType }) => {
  return (
    <div>
      <button>Sort: {currentSortType}</button>
      <ul>
        {sortTypes.map((sortType) => <li><TrackFilterItem key={sortType} sortType={sortType} /></li>)}
      </ul>
    </div>
  );
};

const connector = connect((state: State) => {
  return { 
    sortTypes: state.tracks.sortTypes,
    currentSortType: state.tracks.currentSortType,
  };
});

export default connector(TrackFilter);