import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import trash from "../assets/images/trash.svg"


const Cart = () => {

    const {carrito, removeItem, clear, cantidadProductos, sumaTotalProductos} = useContext(CartContext)

    if (cantidadProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5">
                            <h3>No se encontraron productos en el carrito!</h3>
                            <Link to={"/"} className="btn text-white bg-dark my-5 rounded-0">Volver al Menú Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn text-white bg-dark ronded-0" onClick={clear}>Eliminar Carrito</button></td>
                            </tr>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.cantidad}</td>
                                    <td className="align-middle text-end"><img src={trash} width={32} title="Eliminar Producto" onClick={() => {removeItem(item.id)}}/></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-center"><b>${sumaTotalProductos()}</b></td>
                                <td>&nbsp;</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn text-white bg-dark rounded-0">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart