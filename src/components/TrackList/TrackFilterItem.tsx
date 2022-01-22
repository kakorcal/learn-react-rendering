import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { SortType } from '../../types'
import { State, actions } from '../../redux';

interface ITrackListItemProps extends ConnectedProps<typeof connector> {
  sortType: SortType;
}

const TrackFilterItem: React.FC<ITrackListItemProps> = ({ sort, sortType, currentSortType }) => {
  const onClick = () => {
    if (sortType !== currentSortType) {
      sort(sortType);
    }
  };

  return (
    <button onClick={onClick}>{sortType === currentSortType ? `CURRENT ${sortType}` : sortType}</button>
  );
};

const connector = connect((state: State) => {
  return { 
    currentSortType: state.tracks.currentSortType,
  };
}, {
  sort: actions.tracks.sort,
});

export default connector(TrackFilterItem);
