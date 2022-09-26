
import {NavLink, useLocation} from 'react-router-dom'

import Logo from '../../../images/logo.png'
import Nav from './Nav'

const Header = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");
    return (
        <header className="bg-card">
            <div className="border-r-2 border-text-300 pr-3 w-1/6 justify-center">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="w-5/6 pl-3 justify-end flex-row">
                <Nav/>
            </div>
        </header>
    )
}

export default Header