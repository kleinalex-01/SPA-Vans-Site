import {React, useState, useEffect, use} from "react";
import "./placeholder-img.jpg";
import { Button } from "bootstrap";

export default function Van() {
    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVans = async () => {
            try {
                const respone = await fetch("/api/vans");
                if (!respone.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await respone.json();
                setVans(data.vans);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchVans();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

const vanList = vans.map((van) => (
    <div className="van-card-container" key={van.id}>
      <img className="van-img" src={van.imageUrl} alt={van.name} />
      <div className="van-card-info d-flex justify-content-between">
        <h3>{van.name}</h3>
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
        {vanList}
        </>
    );
}