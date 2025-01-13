import React from "react";
import {Link} from "react-router-dom";

export default function AboutPage() {
    return (
        <>
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
        </>
    )
}