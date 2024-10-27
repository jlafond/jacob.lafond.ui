import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About",
        to: "/about"
    },
    // {
    //     label: "Reviews",
    //     to: "/reviews"
    // },
    {
        label: "Resume",
        to: "/resume"
    },
    {
        label: "Skills",
        to: "/skills"
    },
    {
        label: "Contact",
        to: "/contact"
    }
];


const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)

    const handletoggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__container__logo">
                        <img className="iconImage" src="./images/logo.jpg" alt="My logo"></img>
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, i) => (
                            <li key={i} className="navbar__container__menu__item">
                                <Link onClick={handletoggleIcon} className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav_icon" onClick={handletoggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar;