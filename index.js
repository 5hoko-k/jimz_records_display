import Chart from 'chart.js/auto'
console.log(Chart)
console.log("some random shit")

fetch("http://localhost:3000/")
.then((response) => {
   console.log(response.ok)
   if(!response.ok) throw new Error("somn went wrong")
   return response.json()
})
.then((data) => {
    console.log(data)
}).catch((error) => { console.log(error) })

const ctx = document.getElementById("theChart")
new Chart( ctx, {
    type : "bar",
    data : {
        labels : [],
        datasets : [{
            label : "sales + services of the month",
            data : [],
            borderwidth : 1
        }]
    },
    options: {
        scales : {
            y : {
                baginAtZero : true
            }
        }
    }
})