const totalCash = 20;

document.addEventListener("DOMContentLoaded", (event) => {
    x = document.getElementsByClassName("total-cash");
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = totalCash;
    };
});


var chrt = document.getElementById("donut-expense").getContext("2d");
      var chartId = new Chart(chrt, {
         type: 'doughnut',
         data: {
            labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
            datasets: [{
               label: "Online Tutorial Subjects",
               data: [20, 40, 30, 35, 30, 20],
            }],
         },
         options: {
            responsive: false,
         },
      });