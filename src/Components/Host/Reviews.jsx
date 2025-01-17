 import {React, useState, useEffect} from "react";

 export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [average, setAverage] = useState(0);
    const [counts, setCounts] = useState([]);
    const [percentages, setPercentages] = useState([]);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
    const countMap = reviews.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
      }, {}, [reviews]);
  
      setCounts(countMap);
  
      const total = reviews.length;
      const percentMap = [];
      for (let i = 1; i <= 5; i++) {
        percentMap[i] = ((countMap[i] || 0) / total) * 100;
      }
  
      setPercentages(percentMap);
    }, [reviews]);

    useEffect(() => {
        const average = reviews.reduce((acc, curr) => acc + curr, 0) / reviews.length;
        setAverage(average);
    }, [reviews]);

    const handleClick = (starValue) => {
        setRating(starValue);
        setReviews(prev => [...prev, starValue]);
      };

    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h3>Your reviews</h3>
                    <p>last 30 days</p>
                </div>
            </div>
        <div className="row align-items-center">
            <div className="col-md-3">
                <h1>{average ?  Math.floor(average) + " stars" : <p>No ratings yet.</p>}</h1>
                <p>overall rating</p>
            </div>
            <div className="col-md-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <span>5 stars</span>
                        <span>{average ? Math.floor(percentages[5]) : 0}%</span>
                    </div>
                    <div className="progress">
                        <div
                        className="progress-bar bg-warning"
                        style={{ width: `${percentages[5] || 0}%` }}
                        role="progressbar"
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>4 stars</span>
                        <span>{average ? Math.floor(percentages[4]) : 0}%</span>
                    </div>
                <div className="progress">
                    <div
                    className="progress-bar bg-warning"
                    style={{ width: `${percentages[4] || 0}%` }}
                    role="progressbar"
                    ></div>
                </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>3 stars</span>
                        <span>{average ? Math.floor(percentages[3]) : 0}%</span>
                    </div>
                    <div className="progress">
                        <div
                        className="progress-bar bg-warning"
                        style={{ width: `${percentages[3] || 0}%` }}
                        role="progressbar"
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>2 stars</span>
                        <span>{average ? Math.floor(percentages[2]) : 0}%</span>
                    </div>
                <div className="progress">
                    <div
                    className="progress-bar bg-warning"
                    style={{ width: `${percentages[2] || 0}%` }}
                    role="progressbar"
                    ></div>
                </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <span>1 star</span>
                        <span>{average ? Math.floor(percentages[1]) : 0}%</span>
                    </div>
                <div className="progress">
                    <div
                    className="progress-bar bg-warning"
                    style={{ width: `${percentages[1] || 0}%` }}
                    role="progressbar"
                    ></div>
                </div>
                </div>
            </div>
        </div>


        <div style={{ display: "flex", cursor: "pointer" }}>
            {Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1; 
                return (
                <span
                    key={index}
                    onClick={() => handleClick(starValue)} 
                    onMouseEnter={() => setHover(starValue)} // Hover effect
                    onMouseLeave={() => setHover(0)} // Reset hover effect
                    style={{
                    fontSize: "2rem",
                    color: starValue <= (hover || rating) ? "#FFD700" : "#CCCCCC", // Gold for selected/hovered, gray otherwise
                }}>★</span>
            );})}
    </div>
        </div>
        </>
    )
 }