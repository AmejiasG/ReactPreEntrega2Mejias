import { Link } from "react-router-dom";
import cart from "../assets/images/cart3.svg"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const CartWidget = () => {

    const {cantidadProductos} = useContext(CartContext);

    if (cantidadProductos() > 0) {

        return (
            <Link to={"/cart"} className="btn btn-transparent position-relative carrito">
                <img src={cart} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">{cantidadProductos()}</span>
            </Link>
        )
    }
}

export default CartWidget;