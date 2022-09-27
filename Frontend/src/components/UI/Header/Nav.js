import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

const Nav = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

    return (
        <>
            <NavLink to="/Calculator"
                className={splitLocation[1] === "Calculator" ? "chosen " : ""}>
                Calculator
            </NavLink>
            <a href="https://www.bbtftoken.com" target="_blank" rel="noreferrer">
                To BBTF
            </a>
            <a href="https://www.bbtftoken.com" target="_blank" rel="noreferrer">
                To MP
            </a>
        </>
    )
}

export default Nav
