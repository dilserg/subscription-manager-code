import React from 'react';
import styles from './Profile.module.css';
import Money from './Money/Money';
import Percentages from './Percentages/Percentages';
import Info from './Info/Info';
import { connect } from 'react-redux';
import {
  getName,
  getPhoto,
  getTotalIncome,
  getWantToSpend,
} from '../../state/selectors/profileSelector';
import { getTotalPrice } from '../../state/selectors/subscriptionsSelector';

const Profile = ({
  totalIncome,
  totalPrice,
  name,
  photo,
  setShowSettings,
  wantToSpend,
  showStats,
  setShowStats,
}) => {
  
  return (
    <div className={styles.profile}>
      <Info
        name={name}
        photo={photo}
        setShowStats={setShowStats}
        showStats={showStats}
        setShowSettings={setShowSettings}
      />
      {showStats && (
        <>
          <Money totalIncome={totalIncome} totalPrice={totalPrice} />
          <Percentages
            totalIncome={totalIncome}
            totalPrice={totalPrice}
            wantToSpend={wantToSpend}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getName(state),
  photo: getPhoto(state),
  totalIncome: getTotalIncome(state),
  totalPrice: getTotalPrice(state),
  wantToSpend: getWantToSpend(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
