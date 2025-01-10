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

        <div>
            <Link to="/Vans" class="container-fluid p-5 primary-color ">Back to all vans</Link>
            <div id="van-img-container">
                <img className="van-img" src={van.imageUrl} alt={van.name} />
            </div>
            <div id="van-info-container">
                <h3>{van.name}</h3>
                <p>{van.description}</p>
                <p>${van.price}/day</p>
            </div>
            <button class="btn btn-warning position-relative rent-btn rent-van-big"> Rent this van</button>

        </div>
        </>
    )
}