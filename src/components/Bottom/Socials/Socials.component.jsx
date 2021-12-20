import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../utils/font-awesome';
import * as styles from './Socials.module.scss';

const Socials = ({listDirection}) => {
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
    <ul className={`${styles.list} ${listDirection === 'horizontal' ? styles.list__horizontal : styles.list__vertical}`}>
      {
        socialLinks.map((social, id) => 
          <li className={`${listDirection === 'horizontal' ? null : styles.item__vertical }`} key={`${id}__${social.name}`}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={social.icon}
                title={social.name}
              />
            </a>
          </li>
        )
      }
    </ul>    
  )
}
  
export const SocialsHorizontal = () => 
  <div className={styles.socialsHorizontal}>
    {<Socials listDirection='horizontal' />}
  </div>

export const SocialsVertical = () => 
  <div className={styles.socialsVertical}>
    {<Socials listDirection='vertical' />}
  </div>
