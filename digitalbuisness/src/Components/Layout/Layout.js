import React from 'react'
import css from './Layout.module.css';
import moment from 'moment/moment';
import {BiSearch} from 'react-icons/bi';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className={css.container}>
 <Sidebar/>
    <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
            <div className="gradient-red"></div>
            <div className="gradient-orange"></div>
            <div className="gradient-blue"></div>
        </div>
        <div className={css.header}>
            <span>{moment().format("dddd, do MMM YYYY")}</span>
            <div className={css.searchBar}>
                <BiSearch size={20}/>
                <input type="text" placeholder='Enter here'/>
            </div>
            <div className={css.profile}>
                <img src="./profile.jpg" alt=""  />
              <div className={css.details}>
                <span>Shivani Soni</span>
                <span> eng.shivanisoni2405@gmail.com</span>
              </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Layout