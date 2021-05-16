import React from 'react';
import styles from './Percentages.module.css'
import {VictoryAnimation, VictoryLabel, VictoryPie} from "victory"

const Percentages = ({totalIncome, totalPrice}) => {
  const getPercentages = (totalIncome, totalPrice) =>{
    let percents;
    if(totalIncome < totalPrice){
      percents = 100;
    }else{
      percents = (totalPrice/ totalIncome) * 100;
    }
    return percents;
  }
  const getData = (totalIncome,totalPrice) =>{
    let percents = getPercentages(totalIncome, totalPrice);
    return [{x: 1, y:percents}, {x: 2, y: 100 - percents}];
  }
  // TODO:Добавить рамку для кружка
  return (
    <div className={styles.percentages}>
      <div className={styles.text}>On subscriptions, you spend</div>
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={200} height={200}
          data={getData(totalIncome,totalPrice)}
          innerRadius={60}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: { fill: ({ datum }) => {
                const color = datum.y < 50 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              }
            }
          }}
        />
        <VictoryAnimation duration={1000}>
          {() => {
            return (
              <>
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={100} y={90}
                  text={`${Math.round(getPercentages(totalIncome,totalPrice))}%`}
                  style={{ fontSize: 25 }}
                />
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={100} y={110}
                  text={`of income`}
                  style={{ fontSize: 14 }}
                />
              </>
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  );
};


export default Percentages;