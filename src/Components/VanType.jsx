import { React , useState , useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function VanType( { vans } ) {

    const { id } = useParams();
    const [van, setVan] = useState([])

    useEffect(() => {
        const selectedVan = vans.find((van) => van.id === id)
        setVan(selectedVan)
    }, [id, vans])

    if (!van) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <nav class="navbar">
                <div class="container">
                    <div class="row align-items-center">
                        <div id="vanlife-container" class="col-6 col-md-4">
                            <Link to="/" class="navbar-brand fw-bold mb-0 h1 fs-2">#VANLIFE</Link>
                        </div>
                        <div id="nav-elements-container" class="col-6 col-md-8 ml-auto text-end">
                            <Link to="/About" class="nav-elements-container me-4 text-decoration-none text-color-dark fw-semibold">About</Link>
                            <Link to="/Vans" class="nav-elements-container text-decoration-none text-color-dark fw-semibold">Vans</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container mt-4">
                <div class="row">
                    <div class="col-12 mb-3 van-card">
                        <Link to="/Vans" class="text-decoration-none text-color-dark fs-3 fw-semibold">Back to all vans</Link>
                    </div>
                </div>
            <div class="row">
                <div class="col-md-6">
                    <div id="van-img-container" class="text-center">
                        <img class="img-fluid van-img" src={van.imageUrl} alt={van.name} />
                    </div>
                </div>
            <div class="col-md-6">
                <div id="van-info-container">
                    <h3>{van.name}</h3>
                    <p>{van.description}</p>
                    <p class="fw-bold">${van.price}/day</p>
                    <button class="btn rent-btn rent-van-big mt-5">
                        Rent this van
                    </button>
                </div>
            </div>
            </div>
            </div>

        <footer class="footer mt-5">
            <p class="mb-0">&copy; 2022 #VANLIFE</p>
        </footer>
        </>
    )
}