import {React, useEffect, useState} from "react";
import vanImg from "./placeholder-img.jpg"
import { Link } from "react-router-dom";

export default function Van({ vans , setVans}) {

    const placeholderArr = [1, 2, 3, 4, 5, 6];
    const [loadingDelay, setLoadingDelay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingDelay(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    const vanList = vans.map((van) => (
        <div id="van-card-container" key={van.id}>
        <Link to={`/Vans/${van.id}`} className="trans-hover" ><img class="trans-hover van-img" src={van.imageUrl} alt={van.name} /></Link>
          <div className="van-card-info d-flex justify-content-between">
            <Link to={`/Vans/${van.id}`} class="text-decoration-none primary-color"><h3>{van.name}</h3></Link>
            <div className="d-flex flex-column align-items-end fw-bold fs-5 van-price-info">
              <p>${van.price}</p>
              <p>/day</p>
            </div>
          </div>
          <button class={`${van.type === "simple" ? "simple-color" : van.type === "luxury" ? "luxury-color" : van.type === "rugged" ? "rugged-color" : ""}
            btn btn-warning position-relative rent-btn simple-color`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>;
        </div>
      ));



    return (
        <>
          <div className="container my-5">
            <div className="row">
              {vans.map((van) => (
                <div className="col-6 mb-4" key={van.id}>
                  <div id="van-card-container">
                    <Link to={`/Vans/${van.id}`}>
                    <img className="van-img" src={van.imageUrl} alt={van.name} />
                    </Link>
                  <div className="van-card-info d-flex justify-content-between">
                    <Link to={`/Vans/${van.id}`} className="text-decoration-none primary-color">
                    <h3>{van.name}</h3>
                    </Link>
                  <div className="d-flex flex-column align-items-end fw-bold fs-5 van-price-info">
                    <p>${van.price}</p>
                    <p>/day</p>
                </div>
                </div>
                <button className={`${van.type === "simple" ? "simple-color" : van.type === "luxury" ? "luxury-color" : van.type === "rugged" ? "rugged-color" : ""} 
                                  btn`}>
                                  {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                </button>
                </div>
              </div>
              ))}
            </div>
          </div>

        </>
    );
}