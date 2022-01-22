import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { actions, State } from './redux';
import Image from './components/Image';

// TODO: remove all of this below
interface IAppProps extends ConnectedProps<typeof connector> {
}

const App: React.FC<IAppProps> = ({ volume, tune }) => {
  const classNames = cx();

  React.useEffect(() => {
    tune(300);
  }, []);

  return (
    <>
      <h1 className={classNames.heading}>
        {volume}
      </h1>
      <Image width={500} height={500} />
    </>
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