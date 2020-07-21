import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" >
        Dunder Mifflin Directory
      </span>
      <br></br>
      <span>
          <img src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/630b27dcbf83cd18fd64a7a84f25eb96/large.png" alt="Dm" height="250px" width="250px"></img>
      </span>
    </nav>
  );
}

export default Navbar;
