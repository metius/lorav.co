import * as React from "react";
import * as styles from './Button.module.scss';

const CustomBtn = (props) => {
  return(
    <button className={`${styles.btn} ${props.isHomeBtn ? styles.btn__homePage : null}`}>
      {props.children}
    </button>
  ) 
} 

export default CustomBtn;