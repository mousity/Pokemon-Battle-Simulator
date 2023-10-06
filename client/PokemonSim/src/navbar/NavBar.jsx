import React from "react";
import './NavBar.css';
import { Outlet } from "react-router-dom";

function NavBar(){
return (
    <>
        <div className="Navb">
            <h1>Logo Placeholder for now!</h1>
        </div>
        <Outlet />
    </>
)
}

export default NavBar;