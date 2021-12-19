import * as React from "react";
import Logo from "../Logo/Logo.component";
import * as styles from "./Footer.module.scss";

const Footer = () => 
  <footer className={styles.footer}>
    <a href="#">
      Designed & Built by 
        {/* <span className=logo>mattia</span><span className="logo logo__text-detail">V.</span> */}
        <Logo size='small' />
    </a>
  </footer>

export default Footer;