import Chart from "chart.js/auto";
import { getData } from "./fetchData.mjs";

async function getChart() {
  const {
    salesDataLabels,
    salesDataValues,
    servicesDataLabels,
    servicesDataValues,
    salesData,
    servicesData,
    totalDataLabels,
    totalDataValues,
    totalData,
  } = await getData();

  console.log("Got the Sales data: ");
  console.log(salesData);
  console.log("Got the Services data: ");
  console.log(servicesData);
  console.log("Got the total data: ", totalDataValues);

  const salesChartElement = document.getElementById("salesChart");
  new Chart(salesChartElement, {
    type: "bar",
    data: {
      labels: salesDataLabels,
      datasets: [
        {
          label: "Sales",
          data: salesDataValues,
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
      labels: servicesDataLabels,
      datasets: [
        {
          label: "Services",
          data: servicesDataValues,
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

  const totalChartElement = document.getElementById("totalChart");
  new Chart(totalChartElement, {
    type: "bar",
    data: {
      labels: totalDataLabels,
      datasets: [
        {
          label: "total",
          data: totalDataValues,
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

async function totalDetails() {
  const { totalDataValues } = await getData();
  let total = 0;
  for (let i = 0; i <= totalDataValues.length - 1; i++) {
    total = total + totalDataValues[i];
  }
  document.getElementById("totalElement").innerHTML = total;

}

document.addEventListener("DOMContentLoaded", async () => {
  await totalDetails();
});
