import React from 'react'
import css from './Sidebar.module.css';
import {MdSpaceDashboard, msSpaceDashboard} from 'react-icons/md';
import { AiFillCalendar, AiOutlineTable} from 'react-icons/ai';
import {FaTasks} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    // container class
    <div className={css.container}>
        <img src="./logo.png" alt="Logo" className={css.logo}/>

        {/* Menu class */}
        <div className={css.menu}>
            {/* item class */}
          <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
            <MdSpaceDashboard size={30}/>
          </NavLink>
          {/* item class */}
          <NavLink to="calendar" className={css.item} title='calendar'>
            <AiFillCalendar size={30}/>
          </NavLink>
          {/* item class */}
          <NavLink to="board" className={css.item} title="Trello board">
            <FaTasks size={30}/>
          </NavLink>
          {/* item class */}
          <NavLink to="users" className={css.item} title="users">
            <AiOutlineTable size={30}/>
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar