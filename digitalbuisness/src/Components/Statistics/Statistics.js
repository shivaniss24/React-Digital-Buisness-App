import React from 'react'
import css from './Statistics.module.css';
import {BsArrowUpShort} from 'react-icons/bs';
import { groupNumber } from '../../data/data';
const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
<span className={css.title}>Overview of statistics</span>
<div className={`${css.cards} grey-container`}>
    <div className={css.arrowIcon}>
    <BsArrowUpShort/>
    </div>

    <div className={css.card}>
        <span>Top item this month</span>
        <span> Office comps</span>
    </div>
</div>

<div className={css.card}>
    <span>Items</span>
    <span>$ {groupNumber(74.0003)}</span>
</div>
<div className={css.card}>
    <span>
        Profit
    </span>
    <span>
       profit
    </span>
    <span>$ groupNumber{37000}</span>
</div>

<div className={css.card}>
    <span>Daily Average</span>
    <span>$ groupNumber{57348}</span>
</div>
    </div>
    )
}

export default Statistics