import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <>
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
        </>
    )
}