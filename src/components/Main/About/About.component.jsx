import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle/SectionTitle.component";
import * as styles from './About.module.scss';

const About = () => 
  <>
    <SectionTitle title="About Me"/>
    <div className={styles.content}>
      <p className={styles.contentText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta labore quos, aperiam atque recusandae iste iure aliquid porro, sit voluptatum fugit molestias voluptate? Nisi ea quia quis, qui ut nemo.
      </p>
      <div className={styles.contentImg}>
        
        <StaticImage 
          src="../../../images/about.jpg" 
          alt="Picture of myself" 
          className="about__img" 
          placeholder="blurred"
          />
      </div>
    </div>
  </>
  {/* </div>  */}

export default About; 