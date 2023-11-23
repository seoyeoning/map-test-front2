import React from 'react';
import Styles from './MakeBtn.module.css';

const MakeBtn = ({ text }) => {
  return <button className={Styles.makeBtn}>{text}</button>;
};

export default MakeBtn;
