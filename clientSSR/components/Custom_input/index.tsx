import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.css'

const Custom_input:React.FC<InputHTMLAttributes<any>> = ({ ...props}) => (
    <label className={styles.custom_input_label}>
      <input {...props} />
    </label>
);
  
export default Custom_input;