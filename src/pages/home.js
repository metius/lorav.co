import * as React from "react";
import CustomHelmet from '../components/CustomHelmet/CustomHelmet.component';
import Background from '../components/Background/Background.component';
import Header from '../components/Header/Header.component';
import Main from '../components/Main/Main.component';
import Bottom from '../components/Bottom/Bottom.component';

import '../sass/main.scss';

// const projects = [
//   {
//     name: "Videomania",
//     img: "src/images/icon.png",
//     url: "project/videomania",
//     description: "Videomania is a Movies and Tv-Shows database"
//   }
// ];

//ideally will pass the theme trought ContextApi but let's see
const HomePage = () => {
  return (
    <>
      <CustomHelmet />
      <Background />
      <Header />
      <Main />
      <Bottom />
    </>
  )
}

export default HomePage;