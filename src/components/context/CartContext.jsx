import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const generarOrden = () => {
        
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = carrito.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:sumaTotalProductos()};
        
        const db = getFirestore();
        if (db) {
            const itemsCollection = collection(db, "items")
            arrayProductos.forEach(item => {
                addDoc(itemsCollection, item)
    
            })
            console.log("Proceso de carga de productos: completo");
        }else{
            console.log("No entro a la bd");
        }
        // Agrego un nuevo Documento a la Colección Orders
        // const ordersCollection = collection(db, "orders");
        // addDoc(ordersCollection, order).then(data => {
        //     setOrderId(data.id);
        // });
    }
    const addItem = (item, cantidad) => {
        if(isInCart(item.id)) {
            let producto = carrito.find(prod => prod.id === item.id)
            producto.cantidad += cantidad;
            setCarrito([...carrito])
            
        } else {
            setCarrito([...carrito, {...item, cantidad:cantidad}])
        }
    }

    const removeItem = (id) => {
        const items = carrito.filter(item => item.id !== id)
        setCarrito([...items])

    }

    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (id) => {
        return carrito.some(item => item.id === id); //el some es boolean, si encuentra el id, es true si no, será false
    }

    const cantidadProductos = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumaTotalProductos = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    return (
        <CartContext.Provider value ={{carrito, addItem, removeItem, clear, cantidadProductos, sumaTotalProductos,generarOrden}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;