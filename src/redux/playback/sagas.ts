import { eventChannel, END, EventChannel } from 'redux-saga';
import { all, select, fork, put, call, take, takeLatest, delay, cancelled } from 'redux-saga/effects';
import { Howl, Howler } from 'howler';

import * as actions from './actions';
import selectors from '../rootSelectors';
import { HowlerEventTypes } from '../../types';

class AudioPlayer {
  private _track: Howl | undefined;

  create(src: string) {
    console.log('AudioPlayer: create');
    this._track = new Howl({ src: [src] });
  }

  destroy() {
    console.log('AudioPlayer: destroy');
    this._track?.unload();
  }

  get track() {
    return this._track;
  }
}

function howlerEventChannel(audioPlayer: AudioPlayer) {
  return eventChannel<HowlerEventTypes>(emitter => {
    audioPlayer?.track?.on('play', () => {
      emitter('play');
    });

    audioPlayer?.track?.on('playerror', () => {
      emitter('playerror');
    });

    audioPlayer?.track?.on('pause', () => {
      emitter('pause');
    });

    audioPlayer?.track?.once('load', () => {
      emitter('load');
    });

    audioPlayer?.track?.once('loaderror', () => {
      emitter('loaderror');
    });

    audioPlayer?.track?.once('unlock', () => {
      emitter('unlock');
    });

    audioPlayer?.track?.on('volume', () => {
      emitter('volume');
    });

    audioPlayer?.track?.on('mute', () => {
      emitter('mute');
    });

    audioPlayer?.track?.once('end', () => {
      emitter('end');
    });

    return () => {
      console.log('UNSUBSCRIBE');
      audioPlayer?.track?.off();
    };
  });
}

function* handlePlaybackEvents(audioPlayer: AudioPlayer) {
  const channel = howlerEventChannel(audioPlayer);

  try {
    while(true) {
      const howlerEventType: HowlerEventTypes = yield take(channel);
      
      console.log('handlePlaybackEvents: EVENT TYPE', howlerEventType);

      if (howlerEventType === 'load') {
        console.log('handlePlaybackEvents: PLAY');
        audioPlayer.track?.play();
      }
    }
  } finally {
    const closeChannel: boolean = yield cancelled();

    if (closeChannel) {
      console.log('handlePlaybackEvents: CHANNEL CLOSED');
      channel.close();
    }
  }
}

function* onTune(action: ReturnType<typeof actions.tune>, audioPlayer: AudioPlayer) {
  const annotation: ReturnType<typeof selectors.tracks.selectAnnotationById> = yield select(selectors.tracks.selectAnnotationById, action.payload.id);

  if (annotation?.audio) {
    audioPlayer.destroy();
    audioPlayer.create(annotation.audio);
    yield call(handlePlaybackEvents, audioPlayer);
  }
}

function* initSagas() {
  const audioPlayer = new AudioPlayer();

  yield all([
    takeLatest(actions.tune, function* (action: ReturnType<typeof actions.tune>) {
      yield call(onTune, action, audioPlayer);
    }),
    // takeLatest(actions.pause, onTune),
    // takeLatest(actions.unpause, onTune),
    // takeLatest(actions.next, onTune),
    // takeLatest(actions.previous, onTune),
    // takeLatest(actions.volume, onTune),
    // takeLatest(actions.mute, onTune),
    // takeLatest(actions.unmute, onTune),
  ]);
}

export default initSagas;
