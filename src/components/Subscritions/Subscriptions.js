import React from 'react';
import styles from './Subscriptions.module.css';
import AddSubscription from './AddSubscription/AddSubscription';
import { connect } from 'react-redux';
import Subscription from './Subscription/Subscription';
import { editSubAC, removeSubAC } from '../../state/SubscriptionsReducer';
import { getSubs } from '../../state/selectors/subscriptionsSelector';
import plus from '../../images/plus.svg';
import NoSubs from './NoSubs';

const Subscriptions = ({ subscriptions, removeSub, editSub, showStats }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [globalEditMode, setGlobalEditMode] = React.useState(false);
  let subs = subscriptions.map((s) => (
    <Subscription
      key={s.id}
      removeSub={removeSub}
      id={s.id}
      title={s.title}
      price={s.price}
      date={s.day}
      editSub={editSub}
      showInput={showInput}
      globalEditMode={globalEditMode}
      setGlobalEditMode={setGlobalEditMode}
    />
  ));
  const showAddButton = () => {
    if (!globalEditMode && !showInput) {
      return (
        <button
          onClick={() => setShowInput(true)}
          className={styles.header_button}
        >
          <img alt="" className={styles.plusImage} width="15px" src={plus} />
          add
        </button>
      );
    }
  };

  const SubsListClass = () => {
    if (showStats) return `${styles.SubsList} ${styles.SubsListSmall}`;
    return styles.SubsList;
  };

  return (
    <div className={styles.subscriptions}>
      <header className={styles.header}>
        <span className={styles.header_title}>Subscriptions:</span>
        {showAddButton()}
      </header>
      <div className={styles.titles}>
        <div className={styles.service}>service:</div>
        <div className={styles.price}>price($):</div>
        <div className={styles.day}>payment day:</div>
      </div>
      <div className={styles.line} />
      {showInput && <AddSubscription setShowInput={setShowInput} />}
      {subs.length === 0 && !showInput && <NoSubs />}
      <div className={SubsListClass()}>{subs}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  subscriptions: getSubs(state),
});

const mapDispatchToProps = {
  removeSub: removeSubAC,
  editSub: editSubAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
