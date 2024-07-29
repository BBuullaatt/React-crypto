import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../context/crypto-context";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { assets } = useCrypto();

  const pieChartData = {
    labels: assets.map((a) => a.name),
    datasets: [
      {
        data: assets.map((a) => a.totalAmount),
        label: "$",
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  const pieChart = (
    <Pie
      type="pie"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15,
        },
        legend: {
          display: true,
          position: "top",
        },
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};

function PortfolioChart() {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "5rem",
        justifyContent: "center",
        height: "400px",
      }}
    >
      <Chart />
    </div>
  );
}

export default PortfolioChart;
