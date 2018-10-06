import React from "react";
import NavText from "./NavText";

const styles = {
  background: {
    background: "purple"
  }
}

const TopBar = props => {
  return <div className="navbar navbar-light justify-content-between" style={styles.background}>
    <NavText pText="Clicky Game" />
    <NavText pText="Message" />
    <NavText pText="Score:|Top Score:" />
  </div>  
};

export default TopBar;