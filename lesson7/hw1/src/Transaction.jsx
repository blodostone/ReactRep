import React from 'react';
import moment from 'moment';


const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(new Date(time)).format('D MMMM')}</span>
      <span className="transaction__time">{moment(new Date(time)).format('HH:MM')}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>

  );
};

export default Transaction;