import React from 'react'
import styles from './Subscriptions.module.css'
import AddSubscription from "./AddSubscription/AddSubscription"
import {connect} from 'react-redux'
import Subscription from "./Subscription/Subscription"
import {editSubAC, removeSubAC} from "../../state/SubscriptionsReducer"
import {getSubs} from "../../state/selectors/subscriptionsSelector"
import plus from '../../images/plus.svg'


const Subscriptions = ({subscriptions, removeSub,editSub}) => {
  const [showInput, setShowInput] = React.useState(false);
  let subs = subscriptions.map(s => <Subscription key={s.id} removeSub={removeSub} id={s.id} title={s.title} price={s.price}
                                                    date={s.day} editSub={editSub}/>);


  return (
    <div className={styles.subscriptions}>
      <header className={styles.header}>
        <span className={styles.header_title}>Subscriptions:</span>
        {showInput || <button onClick={()=>setShowInput(true)} className={styles.header_button}>
          <img alt="" className={styles.plusImage} width="15px" src={plus} />add
        </button>}
      </header>
      <div className={styles.titles}>
        <div className={styles.service}>
          service:
        </div>
        <div className={styles.price}>
          price($):
        </div>
        <div className={styles.day}>
          payment day:
        </div>
      </div>
      <div className={styles.line}/>
      { showInput && <AddSubscription setShowInput={setShowInput}/> }
      {subs || <div>No subs</div>}
    </div>
  )
}

const mapStateToProps = state => ({
  subscriptions: getSubs(state)
})

const mapDispatchToProps = {
  removeSub:removeSubAC,
  editSub:editSubAC
}

export default  connect(mapStateToProps, mapDispatchToProps)(Subscriptions)