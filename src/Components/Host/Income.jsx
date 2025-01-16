import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Income() {
    const chartData = {
        labels: ['Ju', 'Au', 'Se', 'Oc', 'No', 'De'], // Months
        datasets: [
          {
            label: 'Income',
            data: [4000, 800, 3200, 3000, 2260, 500], // Example values
            backgroundColor: ['#FBBF24', '#FBBF24', '#FBBF24', '#FBBF24', '#FB923C', '#FB923C'],
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hides the legend
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `$${value / 1000}k`, // Format y-axis ticks
            },
          },
        },
      };

    return (
        <>
        <div className="container-fluid income-container">
            <h1 class="fw-bold pb-3">Income</h1>
            <p class="fs-6 pt-3 m-1">Last <span class="text-decoration-underline">30 days</span></p>
            <h1 class="fw-bold pt-3 m-1">$1234</h1>
            <div className="row justify-content-center pt-5">
                <div className="col-10">
                <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
            <div class="container fluid pt-5">
                <div class="d-flex justify-content-between align-items-center">
                    <h1>Your transactions</h1>
                    <p>Last <span class="text-decoration-underline">30 days</span></p>
                </div>
                <div class="row">
                    <div class="col-10 p-4 transaction-container-outer">
                        <div class="container transaction-container d-flex align-items-center p-4">
                            Example transaction
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}