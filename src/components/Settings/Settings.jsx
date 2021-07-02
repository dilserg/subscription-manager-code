import React from 'react';
import styles from './Settings.module.css';
import cross from "../../images/cross.svg"
import {updateProfileAC} from "../../state/profileReducer"
import {connect} from "react-redux"
import {getName, getTotalIncome, getWantToSpend} from "../../state/selectors/profileSelector"

const Settings = ({setShowSettings, updateProfile, initialName, totalIncome,wantToSpend}) => {
  const [name, setName] = React.useState(initialName)
  const [income, setIncome] = React.useState(totalIncome.toString())
  const [spend, setSpend] = React.useState(wantToSpend.toString())
  const [nameError, setNameError] = React.useState(false);
  const [numberError, setNumberError] = React.useState(false);

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

    if (sendName === "" ){
      return setNameError(true);
    }
    if (sendIncome <= 0 || sendSpend <= 0 || sendIncome <= sendSpend){
      return setNumberError(true);
    }


    updateProfile(name,income,spend)
    setShowSettings(false)
  }
  const closeButtonHandler = () =>{
    setShowSettings(false)
  }

  const submitFormHandler = e =>{
    e.preventDefault()
  }


  const nameClass = () => nameError ? `${styles.nameInput} ${styles.error}` : styles.nameInput

  const incomeClass = () => numberError ? `${styles.incomeInput} ${styles.error}` : styles.incomeInput

  const spendClass = () => numberError ? `${styles.wantToSpendInput} ${styles.error}` : styles.wantToSpendInput

  return (
    <div className={styles.background} id="background" onClick={backgroundClickHandler}>
      <form onSubmit={submitFormHandler} className={styles.settingsContent}>
        <button type="button" className={styles.closeButton} onClick={closeButtonHandler}>
          <img className={styles.closeImage} alt="" src={cross} />
        </button>
        <div>Name:</div>
        <input value={name} onFocus={()=>setNameError(false)} onChange={nameChangeHandler}
               className={nameClass()}/>
        <div>Income:</div>
        <input value={income} onChange={incomeChangeHandler} type="number" onFocus={()=>setNumberError(false)}
               className={incomeClass()}/>
        <div>Want to spend:</div>
        <input value={spend} onChange={spendChangeHandler} type="number" onFocus={()=>setNumberError(false)}
               className={spendClass()}/>
        {
          numberError &&
          <div className={styles.errorText}>Income must be greater than "want to spend"</div>
        }
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