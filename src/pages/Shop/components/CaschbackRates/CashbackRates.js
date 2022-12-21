import React from 'react';

const CashbackRates = ({ cashbackRates }) => {
  return (
    <ul className="cashback_rates">
      {cashbackRates.map(({ amount, type, description }) => (
        <li key={description}>
          {amount}
          {type} - {description}
        </li>
      ))}
    </ul>
  );
};

export default CashbackRates;
