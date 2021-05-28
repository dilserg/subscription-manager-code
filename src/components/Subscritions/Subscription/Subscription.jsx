import React from 'react'
import styles from './Subscription.module.css'
import pencil from '../../../images/pencil.svg'
import bin from '../../../images/delete.svg'
import tick from '../../../images/tick.svg'
import cross from '../../../images/cross.svg'

const Subscription = ({title, price, id, date, removeSub, showInput, editSub, globalEditMode, setGlobalEditMode}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [titleEdit, setTitleEdit] = React.useState(title);
  const [priceEdit, setPriceEdit] = React.useState(price);
  const [dateEdit, setDateEdit] = React.useState(date);

  const titleEditHandler = (e) =>{
    setTitleEdit(e.target.value);
  }
  const priceEditHandler = (e) =>{
    setPriceEdit(e.target.value);
  }
  const dateEditHandler = (e) =>{
    setDateEdit(e.target.value);
  }

  const cancelButtonHandler = () =>{
    setTitleEdit(title)
    setDateEdit(date)
    setPriceEdit(price)
    setEditMode(false)
    setGlobalEditMode(false)
  }

  const editButtonHandler = () =>{
      setEditMode(true)
    setGlobalEditMode(true)
  }

  const submitButtonHandler = () =>{
    const sendTitle = titleEdit.trim()

    const sendPrice = typeof priceEdit === "string" ? +(priceEdit.replace(",", ".")) : priceEdit
    const sendDate = typeof dateEdit === "string" ? +(dateEdit.replace(",", ".")) : dateEdit


    if (sendTitle === "" || sendPrice <= 0 || sendDate <= 0 || sendDate >= 32)
      return

    editSub(id, sendTitle, sendPrice, sendDate)
    setEditMode(false)
    setGlobalEditMode(false)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    submitButtonHandler();
  }

  if (editMode){
    return (
      <form className={styles.subscription} onSubmit={handleSubmit}>
         <input value={titleEdit} onChange={titleEditHandler} className={styles.title}/>
         <input value={priceEdit} type="number" onChange={priceEditHandler} className={styles.price}/>
         <input value={dateEdit} type="number" onChange={dateEditHandler} className={styles.date}/>
         <button onClick={submitButtonHandler} className={styles.submitButton}>
           <img className={styles.submitImage} width='18px' alt="" src={tick}/></button>
         <button onClick={cancelButtonHandler} className={styles.cancelButton}>
           <img className={styles.cancelImage} width='18px' alt="" src={cross}/></button>
       </form>
    )
  }

  const EditButtonClass = () =>{
    if(globalEditMode || showInput)
      return styles.editButton
    else
      return `${styles.hoverButton} ${styles.editButton}`
  }
  const removeButtonClass = () =>{
    if(globalEditMode || showInput)
      return styles.removeButton
    else
      return `${styles.hoverButton} ${styles.removeButton}`
  }

  return (
    <div className={styles.subscription}>
      <div className={styles.icon}>{title[0].toUpperCase()}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price}$</div>
      <div className={styles.date}>{date}-th</div>
      <button onClick={editButtonHandler} className={EditButtonClass()}>
        <img className={styles.editImage} width='18px' alt="" src={pencil}/></button>
      <button onClick={()=>removeSub(id)} className={removeButtonClass()}>
        <img className={styles.removeImage} width='18px' alt="" src={bin}/></button>
    </div>

  )
}

export default Subscription