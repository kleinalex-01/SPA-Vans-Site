import React from "react";

export default function AboutPage() {
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

        <div class="container-fluid m-0 p-0 img-container "></div>
        <div class="hero m-5">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😏)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>


        <div class="container my-5 about-van-btn-container">
            <div class="card p-4 border-0 bg-transparent">
                <h3>Your destination is waiting.</h3>
                <h3>Your van is ready.</h3>
                <a href="/Vans" class="btn btn-explore mt-3 explore-van-btn">Explore our vans</a>
            </div>
        </div>

        <footer class="footer">
            <p class="mb-0">&copy; 2022 #VANLIFE</p>
        </footer>
        </>
    )
}