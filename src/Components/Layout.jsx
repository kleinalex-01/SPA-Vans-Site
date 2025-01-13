import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <nav class="navbar">
            <div class="container">
                <div class="row align-items-center">
                    <div id="vanlife-container" class="col-6 col-md-4">
                        <Link to="/" class="navbar-brand fw-bold mb-0 h1 fs-2">#VANLIFE</Link>
                    </div>
                    <div id="nav-elements-container" class="col-6 col-md-8 ml-auto text-end">
                        <Link to="/Host" class="nav-elements-container me-4 text-decoration-none text-color-dark fw-semibold">Host</Link>
                        <Link to="/About" class="nav-elements-container me-4 text-decoration-none text-color-dark fw-semibold">About</Link>
                        <Link to="/Vans" class="nav-elements-container text-decoration-none text-color-dark fw-semibold">Vans</Link>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
        <footer class="footer">
            <p class="mb-0">&copy; 2025 #VANLIFE</p>
        </footer>
        </>
    )
}