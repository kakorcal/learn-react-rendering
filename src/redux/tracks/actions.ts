import { createAction } from 'typesafe-actions';

import { SortType } from '../../types';

export const sort = createAction('sort', (sortType: SortType) => ({ sortType }))();
