import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
        <nav class="navbar">
            <div class="container d-flex justify-content-between align-items-center">
                <Link to="/" class="navbar-brand fw-bold mb-0 h1">#VANLIFE</Link>
                <div>
                    <Link to="/About" class="me-4 text-decoration-none primary-color fw-semibold">About</Link>
                    <Link to="/Vans" class="text-decoration-none primary-color fw-semibold">Vans</Link>
                </div>
            </div>
        </nav>

        <div class="hero" className="home-hero">
            <div class="hero-overlay home-hero-overlay">
                <h1 class="fw-bold">You got the travel plans, we got the travel vans.</h1>
                <p class="lead">
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </p>
                <a href="/Vans" class="btn btn-warning btn-lg">Find your van</a>
            </div>
        </div>

        <footer class="footer">
            <p class="mb-0">&copy; 2022 #VANLIFE</p>
        </footer>
        </>
    )
}