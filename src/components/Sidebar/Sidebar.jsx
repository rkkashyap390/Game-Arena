import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar(){
    return(
        <div className="sidebar">
            {/* <header>Click to Play</header> */}
            <ul>
                {/* <li><Link className="sidebarmenu" to="/">Tetris</Link></li> */}
                <li><Link className="sidebarmenu" to="/snake">Snake</Link></li>
                {/* <li><Link className="sidebarmenu" to="/">Rabbit Run</Link></li> */}
                <li><Link className="sidebarmenu" to="/tic-tac-toe">Tic-tac-toe</Link></li>
                <li><Link className="sidebarmenu" to="/shootbird">Shoot Birds</Link></li>
                <li><Link className="sidebarmenu" to="/mazegame">Maze Game</Link></li>
                {/* <li><Link className="sidebarmenu" to="/">Tower Blocks</Link></li> */}
            </ul> 
        </div>
    ) 
}

export default Sidebar;

