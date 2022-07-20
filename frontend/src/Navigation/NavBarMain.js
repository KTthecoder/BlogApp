import { Link, NavLink } from "react-router-dom";
import menuIconShow from '../Assets/Icons/menu.png'
import menuIconHidden from '../Assets/Icons/close.png'
import '../Navigation/NavBarMain.css'
import { useState } from "react";

function NavBarMain() { 
    const [show, setShow] = useState(false)

    return (
        <nav>
            <div className="NavHeader">
                <div className="menuBtnDiv">
                    <img src={menuIconShow} alt="menu" className="menuBtn" onClick={() => setShow(true)} />
                    {/* <a href="https://www.flaticon.com/free-icons/open-menu" title="open menu icons">Open menu icons created by Pixel perfect - Flaticon</a> */}
                </div>
                <div className="BlogNameDiv">
                    <Link to="/" className="BlogName">Coding Blog</Link>
                </div>
                <div className="ContactUsDiv">
                    <Link to="/sign-in" className="ContactUsBtn">Sign In</Link>
                </div>
            </div>
            <ul className="CategoriesMenu">
                <li><NavLink to="/" className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>Latest</NavLink></li>
                <li><NavLink to="/categories/python" className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>Python</NavLink></li>
                <li><NavLink to="/categories/django" className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>Django</NavLink></li>
                <li><NavLink to="/categories/react" className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>React</NavLink></li>
                <li><NavLink to="/categories/sql" className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>JavaScript</NavLink></li>
            </ul>
            <div className={show ? "DrawerDiv-show" : "DrawerDiv-hidden"}>
                <div className="DrawerBtns">
                    <div className="DrawerImg">
                        <img src={menuIconHidden} alt="menu" className="menuBtn" onClick={() => setShow(false)} />
                        {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a> */}
                    </div>
                    <div className="DrawerTextDiv">
                        <h1 className="DrawerText">Coders Menu</h1>
                    </div>
                </div>
                <ul className="DrawerMenu">
                    <li><NavLink to="/" className={({isActive}) => (isActive ? "DrawerLink-active" : "DrawerLink")}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => (isActive ? "DrawerLink-active" : "DrawerLink")}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => (isActive ? "DrawerLink-active" : "DrawerLink")}>Contact</NavLink></li>
                    <li><NavLink to="/sign-in" className={({isActive}) => (isActive ? "DrawerLink-active" : "DrawerLink")}>Sign In</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBarMain;
