import react from "react";
import Van from "./Van";

export default function VansPage({ vans , setVans}) {
    return (
        <>
        <nav class="navbar">
            <div class="container d-flex justify-content-between align-items-center">
                <a href="/" class="navbar-brand fw-bold mb-0 h1">#VANLIFE</a>
                <div>
                    <a href="/About" class="me-4 text-decoration-none primary-color fw-semibold">About</a>
                    <a href="/Vans" class="text-decoration-none primary-color fw-semibold">Vans</a>
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