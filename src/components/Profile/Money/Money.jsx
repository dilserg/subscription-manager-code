import React from 'react';
import styles from './Money.module.css'

const Money = ({totalIncome, totalPrice}) => {
  return (
    <div className={styles.money}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Your total income</p>
        <p className={styles.number}>{totalIncome}</p>
        <p className={styles.currency}>usd/month</p>
      </div>
      <div className={styles.line}/>
      <div className={styles.wrapper}>
        <p className={styles.title}>Subscriptions</p>
        <p className={styles.number}>{totalPrice}</p>
        <p className={styles.currency}>usd/month</p>
      </div>
    </div>
  );
};

export default Money;