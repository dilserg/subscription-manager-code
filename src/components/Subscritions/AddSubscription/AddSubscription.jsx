import React from 'react'
import styles from './AddSubscription.module.css'
import {connect} from "react-redux"
import {addSubAC} from "../../../state/SubscriptionsReducer"
import tick from '../../../images/tick.svg';
import cross from '../../../images/cross.svg'

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
  const handleSubmit = (e) =>{
    e.preventDefault();
    addSubClickHandler();
  }

  return (
      <form className={styles.subscription} onSubmit={handleSubmit}>
        <input value={title} onChange={titleChangeHandler} className={styles.title}/>
        <input type="number" value={price} onChange={priceChangeHandler} className={styles.price}/>
        <input type="number" value={date} onChange={dateChangeHandler} className={styles.date}/>
        <button className={styles.addButton} onClick={addSubClickHandler}>
          <img className={styles.addButtonImage} alt="" width="20px" src={tick}/>
        </button>
        <button className={styles.cancelButton} onClick={hideInputs}>
          <img className={styles.cancelButtonImage} src={cross} width="17px" alt=""/>
        </button>
      </form>
  )
}

const mapStateToProps = state =>{
  return {}
}

const mapDispatchToProps = {
  addSub: addSubAC
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubscription);