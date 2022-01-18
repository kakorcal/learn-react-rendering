import { createAction } from 'typesafe-actions';

// initial play
export const tune = createAction('tune', (id: number) => ({ id }))();

// audio
export const start = createAction('start')();
export const load = createAction('load')();
export const end = createAction('end')();
export const volume = createAction('volume', (volume: number) => ({ volume }))();

// playback controls
export const pause = createAction('pause')();
export const unpause = createAction('unpause')();
export const playNext = createAction('playNext')();
export const playPrevious = createAction('playPrevious')();
