import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar(props){
    return(
        <div className="sidebar">
            {/* <header>Click to Play</header> */}
            <ul>
                <li><Link onClick={props.onClick} className="sidebarmenu" to="/snake">Snake</Link></li>
                <li><Link onClick={props.onClick} className="sidebarmenu" to="/tic-tac-toe">Tic-tac-toe</Link></li>
                <li><Link onClick={props.onClick} className="sidebarmenu" to="/shootbird">Shoot Birds</Link></li>
                <li><Link onClick={props.onClick} className="sidebarmenu" to="/mazegame">Maze Game</Link></li>
            </ul> 
        </div>
    ) 
}

export default Sidebar;

