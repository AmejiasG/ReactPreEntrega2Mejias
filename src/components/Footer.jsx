const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black mt-5 p-3">
                <div className="col-md-6 text-white">
                    <h4><b>Redes Sociales</b></h4>
                    <p><img src="./src/assets/images/instagram.png" alt="foto ig" width={32}/><a className="text-decoration-none text-white" href="https://www.instagram.com/hm/">Instagram</a></p>
                    <h4><span>Reclamos</span></h4>
                    <p>Escribanos a reclamos@gmail.com para poder darle una solución a su problema.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;