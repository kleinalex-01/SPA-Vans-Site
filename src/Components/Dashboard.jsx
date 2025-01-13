import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div class="container-fluid m0 p0 d-flex dash-link-container">
                <NavLink to="/Host/Income" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Income</NavLink>
                <NavLink to="/Host/Vans" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Vans</NavLink>
                <NavLink to="/Host/Reviews" className={({ isActive }) => (isActive ? "active-link" : "dashboard-link")}>Reviews</NavLink>
            </div>
            <Outlet />
        </>
    );
}