import React from 'react'
import styles from './App.module.css'
import Profile from "./Profile/Profile"
import Subscriptions from "./Subscritions/Subscriptions"
import Settings from "./Settings/Settings"

const App = () => {
  const [showSettings, setShowSettings] = React.useState(false);
  return (
    <div className={styles.app}>
      <Subscriptions/>
      <Profile setShowSettings={setShowSettings}/>
      {showSettings && <Settings setShowSettings={setShowSettings}/>}
    </div>
  )
}

export default App