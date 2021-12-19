import * as React from "react";
import * as styles from './Copyright.module.scss';

const Copyright = () => 
  <div className={styles.copyright}>
    <p className={styles.text}>&#169;202<span className={styles.text__last}>1</span></p>
  </div>

export default Copyright; 