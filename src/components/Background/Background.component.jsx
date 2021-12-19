import * as React from "react";
import {lines, line} from './Background.module.scss';

const Background = () => {
  return (
    <div className={lines}>
      <div className={line}></div>
      <div className={line}></div>
      <div className={line}></div>
    </div>
  )
}

export default Background; 