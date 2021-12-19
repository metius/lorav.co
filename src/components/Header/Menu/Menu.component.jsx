import React from "react";
import * as styles from './Menu.module.scss';
import MobileMenu from "./MobileMenu.component";
import DesktopMenu from "./DesktopMenu.component";

const Menu = () => {

  const menuItems = [
    // {
    //   name: 'Home',
    //   link: '/',
    //   icon: 'home'
    // },
    {
      name: 'About',
      link: '/#about',
      icon: ['far', 'id-card']
    },
    {
      name: 'Projects',
      link: '/#projects',
      icon: 'cubes'
    },
    {
      name: 'Contacts',
      link: '/#contacts',
      icon: 'paper-plane'
    },
  ];

  return(
    <div id={styles.menu}>
    {
      window.innerWidth > 1200 ? <DesktopMenu menuItems={menuItems} /> : <MobileMenu menuItems={menuItems} />
    }      
    </div>
  )
}
export default Menu; 