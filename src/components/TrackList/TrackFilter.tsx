import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { State, actions } from '../../redux';
import { ReactComponent as ChevronDown } from '../../icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../icons/chevron-up.svg';
import { SortType } from '../../types';

import TrackFilterItem from './TrackFilterItem';

const TrackFilter: React.FC<ConnectedProps<typeof connector>> = ({ sort, sortTypes, currentSortType }) => {
  const classNames = styles();
  const [isListOpen, setIsListOpen] = React.useState(false);

  const onSortByButtonClick = () => {
    setIsListOpen(!isListOpen);
  };

  const onSortButtonClick = (sortType: SortType) => {
    if (sortType !== currentSortType) {
      sort(sortType);
    }

    setIsListOpen(false);
  };

  return (
    <div className={classNames.root}>
      <button className={classNames.sortByButton} onClick={onSortByButtonClick}>
        <div className={classNames.sortByText}>Sort By</div>
        <div className={classNames.sortByIcon}>{isListOpen ? <ChevronUp /> : <ChevronDown />}</div>
      </button>
      {isListOpen && (
        <ul className={classNames.sortList}>
          {sortTypes.map((sortType) => {
            return (
              <li className={sortType === currentSortType ? classNames.sortListItemSelected : classNames.sortListItem} key={sortType}>
                <TrackFilterItem sortType={sortType} onClick={onSortButtonClick} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const styles = () => {
  return {
    root: 'relative min-w-[13rem]',
    sortByButton: 'flex justify-center items-center bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-800 rounded pl-2 py-1 ml-auto',
    sortByText: 'text-lg',
    sortByIcon: 'min-w-[2rem]',
    sortList: 'absolute mt-5 top-[100%] -right-2 list-none p-0 rounded overflow-hidden drop-shadow-xl w-full bg-slate-200 dark:bg-slate-600',
    sortListItem: 'flex m-0 p-0 w-full py-2 px-5 hover:bg-slate-400 dark:hover:bg-slate-800',
    sortListItemSelected: 'flex m-0 p-0 w-full py-2 px-5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-800',
  };
};

const connector = connect((state: State) => {
  return {
    sortTypes: state.tracks.sortTypes,
    currentSortType: state.tracks.currentSortType,
  };
}, {
  sort: actions.tracks.sort,
});

export default connector(TrackFilter);