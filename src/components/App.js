import React from 'react';
import styles from './App.module.css';
import Profile from './Profile/Profile';
import Subscriptions from './Subscritions/Subscriptions';
import Settings from './Settings/Settings';

const App = () => {
  let isMobile = window.screen.width < 500;

  const [showStats, setShowStats] = React.useState(!isMobile);

  const [showSettings, setShowSettings] = React.useState(false);
  return (
    <div className={styles.app}>
      <Subscriptions showStats={showStats} />
      <Profile
        setShowSettings={setShowSettings}
        showStats={showStats}
        setShowStats={setShowStats}
      />
      {showSettings && <Settings setShowSettings={setShowSettings} />}
    </div>
  );
};

export default App;
