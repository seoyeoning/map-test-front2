import React from 'react';
import Styles from './MakeBtn2.module.css';

const MakeBtn2 = ({ text }) => {
  return <button className={Styles.makeBtn2}>{text}</button>;
};

export default MakeBtn2;
