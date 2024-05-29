import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";
import Carousel from "./Carousel"

const ItemListContainer = () => {
    const [items, setItems] = useState({});
    const [visible, setVisible] = useState(true)
    const {id} = useParams();

    // Acceder a una Coleccion en Firestore
    useEffect(() => {
        const db = getFirestore() // conexion al a BD
        const itemsCollection = collection(db, "items") // se hace referencia a donde nos conectamos
        const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryCollection).then(snapShot => { //
            if(snapShot.size > 0){
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()}))) // accedo al id y a todos los campos del Documento
                setVisible(false)

            }
            
        })

    }, [id])

    return (
        <>
            {id ? "" : <Carousel />}
            <div className="container">
                <div className="row my-5">
                    {visible ? <Loading /> : <ItemList items={items}/>}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;