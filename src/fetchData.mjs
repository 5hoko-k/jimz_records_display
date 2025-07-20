export async function getData() {
  let salesData;
  let servicesData;
  let totalData;
  let salesDataLabels;
  let salesDataValues;
  let servicesDataLabels;
  let servicesDataValues;
  let totalDataLabels;
  let totalDataValues;

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
      totalData = resData.total;

      salesDataLabels = salesData.map((row) => {
        const date = new Date(row.date);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
      });
      salesDataValues = salesData.map((row) => row.sales_total);
      servicesDataLabels = servicesData.map((row) => {
        const date = new Date(row.date);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
      });
      servicesDataValues = servicesData.map((row) => row.services_total);
      totalDataLabels = totalData.map((row) => {
        const date = new Date(row.date);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
      });
      totalDataValues = totalData.map((row) => row.total);
    })
    .catch((error) => {
      console.log(error);
    });

  return [
    salesDataLabels,
    salesDataValues,
    servicesDataLabels,
    servicesDataValues,
    salesData,
    servicesData,
    totalDataLabels,
    totalDataValues,
    totalData,
  ];
}
