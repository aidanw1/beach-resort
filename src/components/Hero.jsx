import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

//className is equal to the default prop of "defaultHero" which is
//used in the App.css
Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
