import { SortType } from './types';

const FormattedSortTypes: { [key in SortType]: string; } = {
  'ALPHABETICAL': 'Alphabetical',
  'DATE-ADDED-NEWEST': 'Date Added Newest',
  'DATE-ADDED-OLDEST': 'Date Added Oldest',
};

export const toFormattedSortType = (sortType: SortType): string => {
  return FormattedSortTypes[sortType];
};