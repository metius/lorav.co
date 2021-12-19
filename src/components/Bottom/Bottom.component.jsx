import * as React from "react";
import {SocialsVertical} from './Socials/Socials.component';
import Copyright from "./Copyright/Copyright.component";
import {sides} from './Bottom.module.scss';

const Bottom = () => 
  <div className={sides}>
    <SocialsVertical />
    <Copyright />
  </div>

export default Bottom; 