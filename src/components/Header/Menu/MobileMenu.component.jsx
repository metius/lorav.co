import React, {useState} from "react";
import * as styles from './MobileMenu.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileMenuPanel from "./MobileMenuPanel.component";
import '../../../utils/font-awesome';

const MobileMenu = ({menuItems}) => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    return setShowMenu(!showMenu)
  }

  return(
    <div>  
      <div className={styles.menuText} onClick={toggleMenu}>
        <FontAwesomeIcon 
          icon='bars' 
          title='Hambrger menu'
        />
      </div>
      <MobileMenuPanel menuItems={menuItems} toggleMenu={toggleMenu} visible={showMenu}/>        
    </div>
  )
}

export default MobileMenu;
