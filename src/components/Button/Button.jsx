import React from 'react';
import s from 'components/Button/Button.module.css';

const Button = ({ children, onClick }) => (
  <button type="button" className={s.Button} onClick={onClick}>
    {children}
  </button>
);
export { Button };
