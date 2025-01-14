import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard( { vans, rentedVan } ) {
    const rentedVans = rentedVan.map((van, index) => (
        <div className="col-12 p-2" key={index}>
            <div className="bg-light p-0">
                <div className="border container-fluid d-flex align-items-center">
                    <div className="van-img-list-container">
                        <img className="van-list-img" src={van.imgUrl} alt="vans" />
                    </div>
                    <div className="list-item-info">
                        <p className="fw-bold fs-5">{van.name}</p>
                        <p className="fw-bold fs-5">{van.price}$/day</p>
                    </div>
                    <div className="container d-flex justify-content-end">
                        <Link to={`/Host/Vans/${van.id}`}>Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    ));
    
    return (
        <>
            <div class="row g-0">
                <div class="col-12 p-4 dash-welcome-section">
                    <h1 class="fw-bold">Welcome!</h1>
                        <div class="d-flex justify-content-between">
                            <p>Income last <Link to={"/Host/Income"}>30 days</Link></p>
                            <Link to={"/Host/Income"}>Details</Link>
                        </div>
                    <h1 class="fw-bold dash-money-count">$1234</h1>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-12 d-flex justify-content-between p-4 dash-review-container">
                    <p class="fs-5 fw-semibold">Review score ,rating here,</p>
                    <Link to={"/Host/Reviews"}>Details</Link>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-12 p-4 dash-van-list">
                    <div class="d-flex justify-content-between mb-4">
                        <h3 class="fs-4">Your listed Vans</h3>
                        <Link to={"/Host/Vans"}>View all</Link>
                    </div>
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                        {rentedVans}
                    </div>
                </div>
            </div>
        </>
    );
}