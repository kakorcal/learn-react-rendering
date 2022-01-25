import React from 'react';

import { SortType } from '../../types'
import { toFormattedSortType } from '../../utils';

interface ITrackListItemProps {
  sortType: SortType;
  onClick: (sortType: SortType) => void;
}

const TrackFilterItem: React.FC<ITrackListItemProps> = ({ sortType, onClick }) => {
  const classNames = styles();

  return (
    <button className={classNames.root} onClick={() => onClick(sortType)}>
      {toFormattedSortType(sortType)}
    </button>
  );
};

const styles = () => {
  return {
    root: 'w-full text-base text-left',
  };
};


export default TrackFilterItem;
