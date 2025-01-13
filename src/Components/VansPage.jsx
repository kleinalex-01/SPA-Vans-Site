import react from "react";
import { Link } from "react-router-dom";
import Van from "./Van";

export default function VansPage({ vans , setVans }) {
    return (
        <>
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
        </>
    )
}