import react from "react";
import { Link } from "react-router-dom";
import Van from "./Van";

export default function VansPage({ vans , setVans }) {
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

        <div class="van-hero container-fluid p-5">
            <div class="van-hero-overlay">
                <h1 class="fw-bold">Explore our van options</h1>
                <div class="van-btn-container container-fluid m-0 p-0 d-flex justify-content-between">
                    <button class="btn filter-btn m-3">Simple</button>
                    <button class="btn filter-btn m-3">Luxury</button>
                    <button class="btn filter-btn m-3">Rugged</button>
                    <button class="btn filter m-3 bg-transparent border-0">Clear filters</button>
                </div>
                <div className="van-card-grid">
                    <Van vans={vans} setVans={setVans}/>
                </div>
            </div>
        </div>

        <footer class="footer">
            <p class="mb-0">&copy; 2022 #VANLIFE</p>
        </footer>
        </>
    )
}