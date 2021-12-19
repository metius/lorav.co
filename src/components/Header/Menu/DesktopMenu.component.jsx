import React, {useState} from "react";
import * as styles from './DesktopMenu.module.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../utils/font-awesome';

const DesktopMenu = ({menuItems}) => {
  return(<nav className={styles.navigationBar} >
    <ul className={styles.navigationBar__list}>
      {
        menuItems.map((item, id) => 
        <li className={styles.navigationBar__item} key={`${id}__${item.name}`}>
          <AnchorLink to={item.link}>
            {item.name}
          </AnchorLink>              
        </li>
      )}
    </ul>
  </nav>)
}


export default DesktopMenu;