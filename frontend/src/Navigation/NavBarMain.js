import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import menuIconShow from '../Assets/Icons/menu.png'
import menuIconHidden from '../Assets/Icons/close.png'
import '../Navigation/NavBarMain.css'
import { useState, useEffect } from "react";

function NavBarMain() { 
    const [show, setShow] = useState(false)
    const [categories, setCategories] = useState([])
    const location = useLocation()
    const [userToken, setUserToken] = useState()
    const navigate  = useNavigate()

    function getToken() {
        const token = localStorage.getItem('token');
        setUserToken(token)
    }

    useEffect(() => {
        GetCategories()
        setShow(false)
        getToken()
    }, [location])
 
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const GetCategories = () => {
        const csrftoken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/api/all-categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(response => response.json())
        .then(dataR => {
            setCategories(dataR)
        })
        .catch(error => {
            console.log("Error: ", error)
        })
    }

    return (
        <nav>
            <div className="NavHeader">
                <div className="menuBtnDiv">
                    <img src={menuIconShow} alt="menu" className="menuBtn" onClick={() => setShow(true)} />
                </div>
                <div className="BlogNameDiv">
                    <Link to="/" className="BlogName">Coding Blog</Link>
                </div>
                <div className="ContactUsDiv">
                    {userToken ? (
                        <Link to="/profile" className="ContactUsBtn">Profile</Link>
                    ): (
                        <Link to="/sign-in" className="ContactUsBtn">Sign In</Link>
                    )}
                    
                </div>
            </div>
            <ul className="CategoriesMenu">
                <li><NavLink to={"/"} className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>Latest</NavLink></li>
                {categories && categories.map((item) => (
                    <li><NavLink to={"categories/" + item.slug} className={({isActive}) => (isActive ? "CategoriesLink-active" : "CategoriesLink")}>{item.category}</NavLink></li>
                ))}
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
                    {userToken ? (
                        <li><NavLink to="/profile" className={({isActive}) => (isActive ? "DrawerLink-active" : "DrawerLink")}>Profile</NavLink></li>
                    ): (
                        <li><NavLink to="/sign-in" className={({isActive}) => (isActive ? "DrawerLink-active" : "DrawerLink")}>Sign in</NavLink></li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBarMain;
