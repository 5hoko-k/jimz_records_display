import Chart from "chart.js/auto";
import { getData } from "./fetchData.mjs";

async function getChart() {
  const [
    salesLabels,
    salesValues,
    servicesLabels,
    servicesValues,
    salesData,
    servicesData,
  ] = await getData();

  console.log("Got the Sales data: ");
  console.log(salesData);
  console.log("Got the Services data: ");
  console.log(servicesData);

  const salesChartElement = document.getElementById("salesChart");
  new Chart(salesChartElement, {
    type: "bar",
    data: {
      labels: salesLabels,
      datasets: [
        {
          label: "Sales",
          data: salesValues,
          borderwidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          baginAtZero: true,
        },
      },
    },
  });

  const servicesChartElement = document.getElementById("servicesChart");
  new Chart(servicesChartElement, {
    type: "bar",
    data: {
      labels: servicesLabels,
      datasets: [
        {
          label: "Services",
          data: servicesValues,
          borderwidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          baginAtZero: true,
        },
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", async () => await getChart());
