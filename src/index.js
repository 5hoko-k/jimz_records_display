import Chart from "chart.js/auto";
import { getData } from "./fetchData.mjs";

async function getChart() {
  const [labels, values] = await getData();

  const ctx = document.getElementById("theChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "sales",
          data: values,
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
