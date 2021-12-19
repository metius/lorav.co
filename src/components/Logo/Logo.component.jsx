import * as React from "react";

import * as styles from './Logo.module.scss';

const Logo = ({size}) => 
  <div className={`${styles.logo} ${size === 'small' ? styles.logo__small : null}`}>
    {
      size === 'large' ? 
        <h1 className={styles.logo__large}>lora<span className={`${styles.logo__textDetail} ${styles.logo__blinking} `}>V.</span></h1>
      : 
        //need to verify if this works properly (meaning: style)
        <><span>mattia</span><span className={styles.logo__textDetail}>V.</span></>
      }
  </div> 

export default Logo; 