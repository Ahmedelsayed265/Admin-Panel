//chart one
const ctx = document.getElementById("lineChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Earnings $",
        data: [
          1800, 2000, 2000, 2400, 2100, 2400, 2000, 2600, 2300, 2800, 2400,
          3000, 2300, 2200, 2700, 2400, 2100, 2400, 2000, 2600, 2300, 2800,
          2400, 3000,
        ],
        backgroundColor: ["#227cfd"],
        borderColor: ["#227cfd"],
        borderWidth: 1,
      },
      {
        label: "Total Earnings $",
        data: [
          2000, 2200, 1600, 2200, 1800, 2200, 2300, 2800, 2000, 2200, 2600,
          1800, 2800, 2600, 2400, 2600, 2200, 2600, 2200, 2400, 2800, 2600,
          2200, 2600,
        ],
        backgroundColor: ["#0ff"],
        borderColor: ["#0ff"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctx2 = document.getElementById("doughnut").getContext("2d");
const XChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Direct", "Affilliate", "Sponsored", "E-mail", "Others"],
    datasets: [
      {
        label: "# of Votes",
        data: [300, 200, 170, 100, 30],
        backgroundColor: [
          "#9609f6",
          "#0eb7f2",
          "#77e10d",
          "#f6d003",
          "#f00",
        ],
        borderColor: [
          "#9609f6",
          "#0eb7f2",
          "#77e10d",
          "#f6d003",
          "#f00",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
