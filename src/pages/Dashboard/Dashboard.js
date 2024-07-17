import React from 'react'
import css from './Dashboard.module.css';
import { cardsData,ordersData,groupNumber,INITIAL_EVENTS,boardData,userData } from '../../data/data';
import Statistics from '../../Components/Statistics/Statistics';
import Orders from '../../Components/Orders/Orders';
const Dashboard = () => {
  return (
  //  container class
   <div className={css.container}>

    {/* dashboarrd class where cards are defined */}
     <div className={css.dashboard}>
      <div className={`${css.dashboardHead} them-container`}>
        <div className={css.head}>
          <span>Dashboard</span>
          <div className={css.durationButton}>
            <select name="select">
            <option value="">1 Week</option>
            <option value="">1 Month</option>
            <option  value="">1 Year</option>
         
            </select>
          </div>
        </div>

        {/* creating cards */}
        <div className={css.cards}>
          {
            // iterate over cardsData array
           cardsData.map((card,index)=>(
            <div className={css.card}>
              <div className={css.cardHead}>
                <span>{card.title}</span>
                <span>{card.change}</span>
              </div>
              
               {/* creating card for Amount */}
              <div className={css.cardAmount}>
              <span>$</span>
              <span>{groupNumber(card.amount)}</span>
              </div>
            </div>
           ))
          }
        </div>

      </div>
      <Statistics/>
     </div>
    
    <Orders/>

    {/* orders class  */}
    <div className={css.orders}>
      orders
    </div>
   </div>
  )
}

export default Dashboard