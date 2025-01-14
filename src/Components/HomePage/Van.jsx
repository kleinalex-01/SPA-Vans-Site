import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Van({ vans , setVans}) {

    const placeholderArr = [1, 2, 3, 4, 5, 6];

    return (
        <>
          <div className="container my-5">
            <div className="row">
              {vans.map((van) => (
                <div className="col-6 mb-4 van-card" key={van.id}>
                  <div id="van-card-container">
                    <Link to={`/Vans/${van.id}`}>
                      {placeholderArr.includes(van.id) && <img src="./placeholder-img.jpg" alt="placeholder" class="van-img-placeholder"/>}
                      <img className="van-img" src={van.imageUrl} alt={van.name} />
                    </Link>
                  <div className="van-card-info d-flex justify-content-between p-1">
                    <Link to={`/Vans/${van.id}`} className="text-decoration-none van-card-van-text-decor">
                      <h3>{van.name}</h3>
                    </Link>
                  <div className="d-flex align-items-center justify-content-end fw-bold fs-5 van-price-info flex-wrap">
                    <button className={`${van.type === "simple" ? "simple-color" : van.type === "luxury" ? "luxury-color" : van.type === "rugged" ? "rugged-color" : ""} btn fw-bold van-card-type-bg`}>
                                      {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                    </button>
                    <Link to={`/Vans/${van.id}`} class="fw-normal text-decoration-none van-card-van-text-decor">${van.price}/day</Link>
                  </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>

        </>
    );
}