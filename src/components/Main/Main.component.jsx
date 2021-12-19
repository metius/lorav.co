import * as React from "react";
import Home from './Home/Home.component';
import About from './About/About.component';
import Projects from "./Projects/Projects.component";
import Contacts from "./Contacts/Contacts.component";
import Footer from "../Footer/Footer.component";
import {main, hero, section} from './Main.module.scss'

const Main = () => 
  <div id={main}>
    <section className={hero} id="home">
      <Home />
    </section>
    <section className={section} id="about">
      <About />
    </section>
    <section className={section} id="projects">
      <Projects />
    </section>
    <section className={section} id="contacts">
      <Contacts />
    </section>
    <section className={section}>
      <Footer />
    </section>
  </div> 

export default Main; 