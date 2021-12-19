import * as React from "react";
import SectionTitle from './SectionTitle/SectionTitle.component';
import Menu from './Menu/Menu.component';
import * as styles from './Header.module.scss';

const Header = () => 
  <header>
    <div id={styles.header}>
      <SectionTitle />
      <Menu />
    </div>
  </header>

export default Header; 