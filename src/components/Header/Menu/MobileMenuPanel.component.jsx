import React from "react";
import * as styles from './MobileMenuPanel.module.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../utils/font-awesome';

const MobileMenuPanel = ({menuItems, toggleMenu, visible}) => 
  <div className={`${styles.mobileMenuPanel} ${visible ? styles.mobileMenuPanel__show : styles.mobileMenuPanel__hide}`} >
    <div className={styles.mobileMenuPanel__menu}>
      <nav className={styles.navigation} >
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item} onClick={toggleMenu}>
            <FontAwesomeIcon 
              icon='times' 
              title='Close Menu'
            />
          </li>
          {
            menuItems.map(item => 
            <li className={styles.navigation__item} onClick={toggleMenu}>
              <AnchorLink to={item.link}>
                {item.name}
              </AnchorLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  </div>

export default MobileMenuPanel;