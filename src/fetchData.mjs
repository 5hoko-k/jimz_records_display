export async function getData() {
  let data;
  let dataLabels;
  let dataValues;

  console.log("fetching Data... ");

  await fetch("http://localhost:3000/")
    .then((response) => {
      if (!response.ok) throw new Error("somn went wrong");
      console.log(`Received response: ${response.ok}`);
      return response.json();
    })
    .then((resData) => {
      data = resData;
      dataLabels = resData.map((row) => row.date);
      dataValues = resData.map((row) => row.sales_total);
    })
    .catch((error) => {
      console.log(error);
    });

  return [dataLabels, dataValues];
}
