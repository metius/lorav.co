import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from './Project.module.scss';

const Project = (props) => {
  console.log(`../../../../${props.img}`)

  return(
    <div className={styles.project}>
      <h3 className={styles.project__title}>
        {props.name}
      </h3>
      <div className={styles.project__image}>
        <StaticImage 
          src="../../../../images/projects/videomania.png" 
          alt={props.name}
          placeholder="dominantColor"
          layout="fullWidth"
          // height={200}
          // width={200}
        />
        {/* <StaticImage 
          src={`../../../../${props.img}`}
          // src="../../../../images/about.jpg" 
          alt={props.name}
          placeholder="blurred"
          height={200}
          width={200}
        /> */}
      </div>
      {/* <div className={styles.project__content}>             */}
      <p className={styles.project__description}>
        {props.description}
      </p>
      {
        //I will use Link component here as it is an internal page
      }
      <a href="#" className={styles.project__viewPage}>View Project &#8594;</a>
      {/* </div> */}
    </div>  
  )
}

export default Project;



// <div class="projects-grid__item">
//           <h3 class="project-title">
//             Videomania
//           </h3>
//           <div class="projects-grid__image">

//             <img src="images/projects/videomania_laptop.png" height="200px" width="200px">
//             <img src="images/projects/videomania_laptop.png" height="200px" width="200px">
//           </div>
//           <div class="projects-grid__content">
            
//             <p class="project-description">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quidem numquam voluptatibus, ratione sed suscipit perspiciatis exercitationem ea molestiae nam pariatur id, et quam in ipsa veniam, necessitatibus culpa dignissimos.
//             </p>
//             <a href="#" class="projects-grid__link">View Project &#8594;</a>
//           </div>
//         </div>