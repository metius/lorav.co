import React, {useState} from "react";
import * as styles from './Menu.module.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../utils/font-awesome';

const Menu = () => {

  const navItems = [
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
  
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenu = () => {
    return setShowMenu(!showMenu)
  }

  return(
    <div id={styles.menu}>
    {
      !showMenu 
      ?   
        <div className={styles.menuText} onClick={onShowMenu}>
        <FontAwesomeIcon 
          icon='bars' 
          title='Hambrger menu'
        />
        </div>        
      : 
        <nav className={styles.navigationBar} >
          <ul className={styles.navigationBar__list}>
            {
              navItems.map(item => 
              <li className={styles.navigationBar__item}>
                <AnchorLink to={item.link}>
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    title={item.name}
                  />
                </AnchorLink>              
              </li>
            )}
            <li className={styles.navigationBar__item, styles.navigationBar__closeBtn} onClick={onShowMenu}>              
              <FontAwesomeIcon 
                icon={['far', 'times-circle']} 
                title="Close"
              />
            </li>
          </ul>
        </nav>
    }
    </div>
  )
}
export default Menu; 