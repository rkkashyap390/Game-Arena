import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header(props){
    return(
        <header className="heading"><Link to = "/"><h1 onClick={props.onClick}>Game Arena</h1></Link></header>
    )
}

export default Header;