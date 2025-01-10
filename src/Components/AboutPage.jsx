import React from "react";
import {Link} from "react-router-dom";

export default function AboutPage() {
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

        <div class="container-fluid m-0 p-0 img-container"></div>
        <div class="container my-5">
            <div class="row">
                <div class="col-12">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😏)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card p-4 border-0 about-van-btn-container">
                        <h3>Your destination is waiting.</h3>
                        <h3>Your van is ready.</h3>
                        <Link to="/Vans" class="btn mt-3 explore-van-btn">Explore our vans</Link>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <p class="mb-0">&copy; 2022 #VANLIFE</p>
        </footer>
        </>
    )
}