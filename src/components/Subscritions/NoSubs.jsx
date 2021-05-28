import React from 'react';
import styles from './Subscriptions.module.css'

const NoSubs = () => {
  return (
    <div className={styles.noSubs}>
      You don't have any subscriptions yet
    </div>
  );
};

export default NoSubs;