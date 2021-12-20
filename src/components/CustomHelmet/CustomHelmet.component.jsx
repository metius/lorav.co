import * as React from "react";
import { Helmet } from "react-helmet";

const CustomHelmet = () => 
  <Helmet>
    <title>Home | lorav.co</title>
    
    {/* <!-- Google Fonts -->  */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    {/* <!-- Oxygen https://fonts.google.com/specimen/Oxygen?query=oxygen--> */}
    <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" /> 

    {/* <!-- Kaushan Script  https://fonts.google.com/specimen/Kaushan+Script?query=kaushan--> */}
    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" /> 

    {/* <!-- Font Awesome  --> */}
    <script src="https://kit.fontawesome.com/d33bb2f7bb.js" crossorigin="anonymous"></script>
  </Helmet>


export default CustomHelmet;