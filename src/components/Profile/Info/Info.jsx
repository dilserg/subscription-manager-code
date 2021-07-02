import React from 'react';
import styles from './Info.module.css';
import settings from '../../../images/settings.svg';
import TempPhoto from '../../../images/photo.png';

const Info = ({ name, photo, setShowSettings, setShowStats, showStats }) => {
  return (
    <div className={styles.info}>
      <div className={styles.flexWrapper}>
        <div className={styles.photo}>
          <img alt="" src={photo || TempPhoto} />
        </div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.flexWrapper}>
        <button
          onClick={() => setShowStats((prev) => !prev)}
          className={styles.ShowButton}
        >
          <p className={styles.buttonText}>
            {showStats ? 'Hide' : 'Show more info'}
          </p>
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className={styles.settings}
        >
          <img
            className={styles.settingsImage}
            alt=""
            src={settings}
            height="30px"
          />
        </button>
      </div>
    </div>
  );
};

export default Info;
