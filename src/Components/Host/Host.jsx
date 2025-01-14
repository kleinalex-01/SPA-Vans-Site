import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Host() {
    return (
        <>
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-12 d-flex justify-content-around dash-link-container">
                    <NavLink to="/Host/Dashboard" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Dashboard</NavLink>
                    <NavLink to="/Host/Income" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Income</NavLink>
                    <NavLink to="/Host/Vans" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Vans</NavLink>
                    <NavLink to="/Host/Reviews" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Reviews</NavLink>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
}