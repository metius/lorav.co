import React, {useState, useLayoutEffect} from "react";
import * as styles from './Menu.module.scss';
import MobileMenu from "./MobileMenu.component";
import DesktopMenu from "./DesktopMenu.component";

const isBrowser = typeof window !== undefined;

const Menu = () => {

  const mobileBreakpoint = 1200;
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : mobileBreakpoint);

  useLayoutEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const menuItems = [
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
      screenWidth > 1200 ? <DesktopMenu menuItems={menuItems} /> : <MobileMenu menuItems={menuItems} />
    }      
    </div>
  )
}
export default Menu; 