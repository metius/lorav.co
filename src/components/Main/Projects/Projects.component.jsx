import * as React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle.component";
import Project from "./Project/Project.component";
import * as styles from './Projects.module.scss';

//it would be nice to get the projects info from an "external" source (JSON, GraphQL,etc..)
const projects = [
  {
    name: "Videomania",
    img: "images/projects/videomania.png",
    url: "project/videomania",
    description: "Videomania is a Movies and Tv-Shows database"
  },
  {
    name: "Videomania 2",
    img: "images/projects/videomania.png",
    url: "project/videomania",
    description: "Videomania is a Movies and Tv-Shows database"
  },
  {
    name: "Videomania 3",
    img: "images/projects/videomania.png",
    url: "project/videomania",
    description: "Videomania is a Movies and Tv-Shows database"
  },
];

const Projects = () => {
  return(
    // <div className={styles.projects}>
    <>
      <SectionTitle title="Projects" />
      <div className={styles.grid}>
        {
          projects.map( (project, id) => 
            <Project 
              name={project.name}
              img={project.img}
              link={project.url}
              description={project.description}
              key={`${id}__${project.name}`}
            />)
        }
      </div>
      {/* </div> */}
    </>
  )
}

export default Projects;
