import { Link } from "react-router-dom";

const Error404 = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Error 404! La página que estas buscando no existe!</h1>
                    <p className="text-center"><Link to= {"/"} className= "btn bg-black text-white">Volver a la página principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;