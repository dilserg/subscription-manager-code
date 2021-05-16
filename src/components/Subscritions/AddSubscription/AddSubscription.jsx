import React from 'react'
import styles from './AddSubscription.module.css'
import {connect} from "react-redux"
import {addSubAC} from "../../../state/SubscriptionsReducer"

const AddSubscription = ({addSub,setShowInput}) => {
  const day = new Date();
  const [title,setTitle] = React.useState("");
  const [price,setPrice] = React.useState("");
  const [date,setDate] = React.useState(day.getDate().toString());

  const titleChangeHandler = (e) =>{
    setTitle(e.target.value);
  }
  const priceChangeHandler = (e) =>{
    setPrice(e.target.value)
  }
  const dateChangeHandler = (e) =>{
      setDate(e.target.value)
  }

  const hideInputs = () =>{
    setShowInput(false);
    setTitle("");
    setPrice("");
    setDate("");
  }

  const addSubClickHandler = () =>{
    const sendTitle = title.trim()
    const sendPrice = +(price.replace(",", "."))
    const sendDate = +(date.replace(",", "."))

    if (sendTitle === "" || sendPrice <= 0 || sendDate <= 0 || sendDate >= 32)
      return

    hideInputs();
    addSub(title, price, date)
  }

  return (
    <div className={styles.subscription}>
      <input value={title} onChange={titleChangeHandler} className={styles.title}/>
      <input type="number" value={price} onChange={priceChangeHandler} className={styles.price}/>
      <input type="number" value={date} onChange={dateChangeHandler} className={styles.date}/>
      <button className={styles.addButton} onClick={addSubClickHandler}>+</button>
      <button className={styles.cancelButton} onClick={hideInputs}>-</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return {}
}

const mapDispatchToProps = {
  addSub: addSubAC
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubscription);