const Carousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/3a3a6e9a-27c4-4d63-a9f6-313c9a95c620___49dfe4022891641e291c482c290adfa4.webp" className="d-block w-100" alt="foto1" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/ac602072-4504-434e-9d8a-b01d61e61470___c98566a180f2f0c1c566aec1add3e86d.webp" className="d-block w-100" alt="foto2" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://hmchile.vtexassets.com/assets/vtex.file-manager-graphql/images/ead3a26c-dd14-457f-8942-e2ec8fa78a72___b87c28c8be01f812c4ad97e7c685663c.webp" className="d-block w-100" alt="foto3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel;