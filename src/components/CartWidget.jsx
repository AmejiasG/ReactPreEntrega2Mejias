import cart from "../assets/images/cart3.svg"

const CartWidget = () => {
    return(
        <>
            <button type="button" className="btn btn-transparent position-relative carrito">
                <img src={cart} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </>
    )
}

export default CartWidget;