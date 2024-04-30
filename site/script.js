let totalCash = 20.16;
const currency = "PHP";

document.getElementById("current-page").innerHTML = "Home";

document.addEventListener("DOMContentLoaded", (event) => {
    x = document.getElementsByClassName("total-cash");
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = currency + " " + totalCash;
    };
});

function toggleMenuOn() {
    document.getElementById("menu-container").classList.remove("hide");
}

function toggleMenuOff() {
    document.getElementById("menu-container").classList.add("hide");
}

var chrt = document.getElementById("donut-expense").getContext("2d");
      var chartId = new Chart(chrt, {
         type: 'doughnut',
         data: {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [{
               label: "Online Tutorial Subjects",
               data: [20, 40, 30, 35, 30],
            }],
         },
         options: {
            responsive: false,
            animation: false,
            cutout: '65%',
            plugins: {
               legend: {
                   position: 'bottom', //set the legeds to the bottom
                   align: 'start',
                labels: {
                    usePointStyle: true,
                    boxWidth: 7,
                    boxHeight: 7,
                }
               },
            },
            elements: {
                arc: {
                    borderWidth: 0 //remove the barriers between each data
                },
            },
         },
      });