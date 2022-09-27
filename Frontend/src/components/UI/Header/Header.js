
import {NavLink, useLocation} from 'react-router-dom'

import Logo from '../../../images/logo.png'
import Nav from './Nav'

const Header = () => {
    return (
        <header className="bg-card">
            <div className="border-r-2 border-text-300 pr-3 w-1/6 justify-center">
                <a href="/" rel="nofollow">
                    <img src={Logo} alt="logo"/>
                </a>
            </div>
            <div className="nav w-5/6 pl-3 justify-end flex-row">
                <Nav/>
            </div>
        </header>
    )
}

export default Header