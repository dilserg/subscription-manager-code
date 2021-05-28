import React from 'react'
import styles from './Info.module.css'
import settings from '../../../images/settings.svg'

const Info = ({name,photo,setShowSettings}) => {

  return (
    <div className={styles.info}>
      <div className={styles.photo}>
        <img alt="" src={photo || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"}/>
      </div>
      <div className={styles.name}>{name}</div>
      <button onClick={() => setShowSettings(true)} className={styles.settings}>
        <img className={styles.settingsImage} alt="" src={settings} height='30px'/>
      </button>
    </div>
  );
};


export default Info;