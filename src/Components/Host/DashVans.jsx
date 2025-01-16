import React from "react";
import { Link } from "react-router-dom";

export default function DashVans({ vans, rentedVan, setRentedVan }) {
    const rentedVans = rentedVan.map((van, index) => (
        <Link to={`/Host/Vans/${van.id}`} className="text-decoration-none">
        <div className="col-12 p-2" key={index}>
            <div className="bg-light p-0">
                <div className="border container-fluid d-flex align-items-center">
                    <div className="van-img-list-container">
                        <img className="van-list-img" src={van.imgUrl} alt="vans" />
                    </div>
                    <div className="list-item-info d-flex flex-column ms-3">
                        <p className="fw-bold fs-5">{van.name}</p>
                        <p className="fw-bold fs-5">{van.price}$/day</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    ));
    return (
        <>
            <div class="container-fluid p-4 m-0">
                <h1 class="fw-bold">Your listed vans</h1>
                <div class="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                    {rentedVans}
                </div>
            </div>
        </>
    );
}