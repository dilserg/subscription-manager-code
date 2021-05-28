import React from 'react';
import styles from './Settings.module.css';
import cross from "../../images/cross.svg"
import {updateProfileAC} from "../../state/profileReducer"
import {connect} from "react-redux"
import {getName, getTotalIncome, getWantToSpend} from "../../state/selectors/profileSelector"

const Settings = ({setShowSettings, updateProfile, initialName, totalIncome,wantToSpend}) => {
  const [name, setName] = React.useState(initialName)
  const [income, setIncome] = React.useState(totalIncome)
  const [spend, setSpend] = React.useState(wantToSpend)

  const backgroundClickHandler = (e) =>{
    if(e.target.id === "background"){
      setShowSettings(false)
    }
  }

  const nameChangeHandler = (e) =>{
    setName(e.target.value)
  }
  const incomeChangeHandler = (e) =>{
    setIncome(e.target.value)
  }
  const spendChangeHandler = (e) =>{
    setSpend(e.target.value)
  }

  const submitButtonHandler = () =>{
    const sendName = name.trim()
    const sendIncome = +(income.replace(",", "."))
    const sendSpend = +(spend.replace(",", "."))

    if (sendName === "" || sendIncome <= 0 || sendSpend <= 0 || sendIncome <= sendSpend)
      return

    updateProfile(name,income,spend)
    setShowSettings(false)
  }
  const closeButtonHandler = () =>{
    setShowSettings(false)
  }

  const submitFormHandler = e =>{
    e.preventDefault()
  }

  return (
    <div className={styles.background} id="background" onClick={backgroundClickHandler}>
      <form onSubmit={submitFormHandler} className={styles.settingsContent}>
        <button type="button" className={styles.closeButton} onClick={closeButtonHandler}>
          <img className={styles.closeImage} alt="" src={cross} />
        </button>
        <div>Name:</div>
        <input value={name} onChange={nameChangeHandler} className={styles.nameInput}/>
        <div>Income:</div>
        <input value={income} onChange={incomeChangeHandler} type="number" className={styles.incomeInput}/>
        <div>Want to spend:</div>
        <input value={spend} onChange={spendChangeHandler} type="number" className={styles.wantToSpendInput}/>
        <button onClick={submitButtonHandler} className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state =>({
  initialName:getName(state),
  totalIncome:getTotalIncome(state),
  wantToSpend:getWantToSpend(state)
})

const mapDispatchToProps = {
  updateProfile:updateProfileAC
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);