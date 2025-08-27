import React from "react";
import NavContainer from "./NavContainer"; // your navbar component
import SchoolContainer from "./SchoolContainer"; // your school section
import LearnContainer from "./LearnContainer"; // your learn section
import headerBg from "../../images/header-image.png"; // background image

const Header = () => {
  const headerStyle = {
    backgroundImage: `
      radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%),
      url(${headerBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "1240px",
    color: "#fff",
  };

  return (
    <header style={headerStyle}>
      <NavContainer />
      <SchoolContainer />
      <LearnContainer />
    </header>
  );
};

export default Header;
