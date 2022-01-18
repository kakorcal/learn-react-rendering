import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { actions, State } from './redux';

// TODO: remove all of this below
interface IAppProps extends ConnectedProps<typeof connector> {
}

const App: React.FC<IAppProps> = ({ volume, tune }) => {
  const classNames = cx();

  return (
    <h1 className={classNames.heading}>
      {volume}
    </h1>
  );
}

const cx = () => {
  return {
    heading: 'prose lg:prose-xl',
  };
};

const connector = connect((state: State) => {
  return { 
    volume: state.playback.volume,
  };
}, {
  tune: actions.playback.tune,
});

export default connector(App);