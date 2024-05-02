import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-hym.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-light p-4">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="hym" width={200}/>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={"/category/polerones"}>Polerones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={"/category/poleras"}>Poleras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to={"/category/pantalones"}>Pantalones</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;