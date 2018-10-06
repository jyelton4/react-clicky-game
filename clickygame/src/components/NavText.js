import React from "react";

const styles = {
    text: {
      color: "white", 
      fontSize: 25
    }
  }

const NavText = props => (
    <div className="navbar-text" href="#" style={styles.text}>{props.pText}</div>
);

export default NavText;