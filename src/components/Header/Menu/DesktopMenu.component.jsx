import React from "react";
import * as styles from './DesktopMenu.module.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../../../utils/font-awesome';

const DesktopMenu = ({menuItems}) => 
  <nav>
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
  </nav>

export default DesktopMenu;