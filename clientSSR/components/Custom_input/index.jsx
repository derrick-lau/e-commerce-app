import React from 'react';
import styles from './index.module.css'


const Custom_input = ({label, ...props}) => (
    <div className={styles.custom_input_div}>
      {label ? (
          <label className={props.value? styles.resize : null}>
            {label}
          </label>
      ) : null}
      <input {...props} />
    </div>
);
  
export default Custom_input;