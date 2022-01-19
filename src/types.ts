export interface Track {
  id: string;
  title: string;
  description: string | null;
  artist: string;
  album: string | null;
  art: string;
  audio: string;
  duration: string;
  instrumental: boolean;
  explicit: 'radio-safe' | null;
  genres: string | null;
  dateReleased: string;
  dateAdded: string;
  url: string;
}

export type Tracks = {
  [key: string]: Track;
};

export type TrackIds = string[];

export type SortType = 'ALPHABETICAL' | 'DATE-ADDED-NEWEST' | 'DATE-ADDED-OLDEST';
