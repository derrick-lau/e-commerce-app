import React, { ButtonHTMLAttributes } from 'react';
import styles from './index.module.css'

const Custom_button:React.FC<ButtonHTMLAttributes<any>> = ({ ...props}) => (
    <button className={styles.custom_button} { ...props}/>
);
  
export default Custom_button;