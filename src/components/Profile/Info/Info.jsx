import React from 'react';
import styles from './Info.module.css'

const Info = ({name,photo}) => {
  return (
    <div className={styles.info}>
      <div className={styles.photo}>
        <img alt="" src={photo || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"}/>
      </div>
      <div className={styles.name}>{name}</div>
      <button className={styles.settings}>settings</button>
    </div>
  );
};


export default Info;