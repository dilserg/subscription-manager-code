import React from 'react'
import styles from './App.module.css'
import Profile from "./Profile/Profile"
import Subscriptions from "./Subscritions/Subscriptions"

const App = () => {
  return (
    <div className={styles.app}>
      <Subscriptions/>
      <Profile/>
    </div>
  )
}

export default App