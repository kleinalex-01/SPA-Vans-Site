import {React} from "react";
import vanImg from "./placeholder-img.jpg"
import { Link } from "react-router-dom";

export default function Van({ vans , setVans}) {

    const placeholderArr = [1, 2, 3, 4, 5, 6];

    const placeholder = placeholderArr.map((items) => (
        <div className="van-card-container">
        <img className="van-img" src={vanImg} alt="placeholder-img"/>
          <div className="van-card-info d-flex justify-content-between">
            <h3>Loading...</h3>
            <div className="d-flex flex-column align-items-end fw-bold fs-5 van-price-info">
              <p></p>
              <p></p>
            </div>
          </div>
          <button class="btn btn-warning position-relative rent-btn">Loading...</button>
        </div>
    ))


const vanList = vans.map((van) => (
    <div className="van-card-container" key={van.id}>
    <Link to={`/Vans/${van.id}`} className="trans-hover" ><img class="trans-hover van-img" src={van.imageUrl} alt={van.name} /></Link>
      <div className="van-card-info d-flex justify-content-between">
        <Link to={`/Vans/${van.id}`} class="text-decoration-none primary-color"><h3>{van.name}</h3></Link>
        <div className="d-flex flex-column align-items-end fw-bold fs-5 van-price-info">
          <p>${van.price}</p>
          <p>/day</p>
        </div>
      </div>
      <button class="btn btn-warning position-relative rent-btn">Rent this van</button>
    </div>
  ));

    return (
        <>
        {vans.length === 0 ? placeholder : vanList}
        </>
    );
}