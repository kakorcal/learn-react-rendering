// import React from 'react';
// import { connect, ConnectedProps } from 'react-redux';
// import { actions, State } from './redux';
// import Image from './components/Image';

// // TODO: remove all of this below
// interface IAppProps extends ConnectedProps<typeof connector> {
// }

// const App: React.FC<IAppProps> = ({ volume, tune }) => {
//   const classNames = cx();

//   React.useEffect(() => {
//     tune(300);
//   }, []);

//   return (
//     <>
//       <h1 className={classNames.heading}>
//         {volume}
//       </h1>
//       <Image width={500} height={500} />
//     </>
//   );
// }

// const cx = () => {
//   return {
//     heading: 'prose lg:prose-xl',
//   };
// };

// const connector = connect((state: State) => {
//   return { 
//     volume: state.playback.volume,
//   };
// }, {
//   tune: actions.playback.tune,
// });

// export default connector(App);

import React from 'react';
// import { connect, ConnectedProps } from 'react-redux';

// import { State } from './redux';
// import List from './components/List/List';
// import TrackItem from './components/TrackItem';

import Container from './components/Container';
import Navbar from './components/Navbar';
import Tuner from './components/Tuner/Tuner';
import TrackList from './components/TrackList/TrackList';

const App: React.FC = () => {
  const classNames = styles();

  return (
    <div className={classNames.root}>
      <header className={classNames.header}>
        <Container.Navbar>
          <Navbar />
        </Container.Navbar>
      </header>
      <main className={classNames.main}>
        <Container.Main>
          <TrackList />
          <Tuner />
        </Container.Main>
      </main>
    </div>
  );
};

const styles = () => {
  return {
    root: 'w-full bg-slate-200 dark:bg-slate-900 prose prose-slate dark:prose-invert prose-2xl max-w-none transition-colors',
    header: 'w-full sticky z-10 top-0 bg-blue-200 dark:bg-blue-800 transition-colors',
    main: 'w-full py-12'
  };
};

    // <List>
    //   {trackIds.map((trackId) => {
    //     return <TrackItem key={trackId} id={trackId} />;
    //   })}
    // </List>

// const connector = connect((state: State) => {
//   return { 
//     trackIds: state.tracks.ids,
//   };
// });

export default App;

/* 
Test Cases:

1. useSelector vs mapStateToProps
2. React.cloneElement vs React.Children.map
3. State colocation vs parent management

*/
