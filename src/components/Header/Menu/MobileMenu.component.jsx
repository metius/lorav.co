import React, {useState} from "react";
import * as styles from './MobileMenu.module.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileMenuPanel from "./MobileMenuPanel.component";
import { AnimateOnChange } from 'react-animation';
import '../../../utils/font-awesome';

const MobileMenu = ({menuItems}) => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    return setShowMenu(!showMenu)
  }

  return(
    <div id={styles.menu}>  
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


// return(
//   <div id={styles.menu}>  
//   {
//     !showMenu 
//     ?   
//       <div className={styles.menuText} onClick={toggleMenu}>
//         <FontAwesomeIcon 
//           icon='bars' 
//           title='Hambrger menu'
//         />
//       </div>
//     : 
//         <MobileMenuPanel menuItems={menuItems} toggleMenu={toggleMenu} visible={showMenu}/>        
     
//   }
//   </div>
// )
