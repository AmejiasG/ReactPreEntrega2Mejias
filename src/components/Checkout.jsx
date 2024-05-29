import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {carrito, sumaTotalProductos, cantidadProductos, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = carrito.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:sumaTotalProductos()};
        

        // if (db) {
        //     const itemsCollection = collection(db, "items")
        //     arrayProductos.forEach(item => {
        //         addDoc(itemsCollection, item)
    
        //     })
        //     console.log("Proceso de carga de productos: completo");
        // }else{
        //     console.log("No entro a la bd");
        // }
        // Agrego un nuevo Documento a la Colección Orders
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            console.log(data)
        });

    }

    if (cantidadProductos() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        

                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>x{item.cantidad}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${sumaTotalProductos()}</b></td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="text-end"><button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button></td>
                            </tr>
                            <tr>
                                <td colSpan={6} className="text-start"><Link to={"/"} className="btn text-white bg-dark ronded-0" onClick={clear}>Volver al Menu</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicidades, Tu ID de Compra es: <b>{orderId}</b>. También se enviará un correo con la información</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;