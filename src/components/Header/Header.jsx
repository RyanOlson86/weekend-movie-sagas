import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";


const Header = () => {
    const history = useHistory();

    // Clicking on header title will send back to home
    const handleClick = () => {
        history.push("/");
      };

    return (
        <div className="header">
            <h1 onClick={handleClick}>Show Me The Movies</h1>
        </div>
    )
}

export default Header