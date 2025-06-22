export async function getData() {
  let salesData;
  let servicesData;
  let salesDataLabels;
  let salesDataValues;
  let servicesDataLabels;
  let servicesDataValues;

  console.log("fetching Data... ");

  await fetch("http://localhost:3000/")
    .then((response) => {
      if (!response.ok) throw new Error("somn went wrong");
      console.log(`Received response: ${response.ok}`);
      return response.json();
    })
    .then((resData) => {
      salesData = resData.sales;
      servicesData = resData.services;

      console.log("Got the Sales data: ");
      console.log(salesData);
      console.log("Got the Services data: ");
      console.log(servicesData);

      salesDataLabels = salesData.map((row) => row.date);
      salesDataValues = salesData.map((row) => row.sales_total);
      servicesDataLabels = servicesData.map((row) => row.date);
      servicesDataValues = servicesData.map((row) => row.services_total);
    })
    .catch((error) => {
      console.log(error);
    });

  return [salesDataLabels, salesDataValues, servicesDataLabels, servicesDataValues];
}
