import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../utils/font-awesome';
import * as styles from './Socials.module.scss';

const Socials = (props) => {
  const socialLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/metius',
      icon: ['fab', 'github']
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mattia-vettorato/',
      icon: ['fab', 'linkedin-in']
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/mattiaV_dev',
      icon: ['fab', 'twitter']
    },
  ];

  return(
    <div className={`${props.position === 'home' ? styles.socialsHome : styles.socials}`}>
      <ul className={styles.list}>
        {
          socialLinks.map(social => 
            <li className={styles.item}>
              <a href={social.link} target="_blank" rel="noopener noreferer">
                <FontAwesomeIcon 
                  icon={social.icon}
                  title={social.name}
                />
              </a>
            </li>
          )
        }
      </ul>    
    </div>
  )
}
  
export default Socials; 