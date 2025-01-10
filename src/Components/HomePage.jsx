import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

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

        <div className="home-hero-section">
            <div class="home-hero-overlay d-grid align-items-center">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="fw-bold">You got the travel plans, we got the travel vans.</h1>
                            <p class="lead">
                                Add adventure to your life by joining the #vanlife movement.
                                Rent the perfect van to make your perfect road trip.
                            </p>
                            <Link to="/Vans" class="btn btn-warning btn-lg">Find your van</Link>
                        </div>
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