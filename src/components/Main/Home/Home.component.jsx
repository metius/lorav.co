import * as React from "react";
import Logo from '../../Logo/Logo.component';
import CustomBtn from '../../Button/Button.component';
import {SocialsHorizontal} from '../../Bottom/Socials/Socials.component';
import * as styles from './Home.module.scss';

const Home = () => 
  <div className={styles.home}>
    <Logo size='large' />
    <h2 className={styles.home__subtitle}>
      Content Writer
    </h2>
    <div className={styles.contacts}>
      <CustomBtn isHomeBtn >
        Contact Me
      </CustomBtn>
      <SocialsHorizontal />
    </div> 
  </div> 

export default Home; 