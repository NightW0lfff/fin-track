const data = [
  {
    // labels: [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ],
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        startDate: "2023",
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40, 50, 42, 34, 55, 75],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.95)",
        // borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(62,62,62 , .3)",
        borderColor: "rgba(69,69,69 , 1)",

        borderRadius: 3,
      },
    ],
  },
  {
    labels: ["Income", "Spending", "Saving"],
    datasets: [
      {
        startDate: "Year",
        label: "Dataset 1",
        data: [120000, 80000, 40000],
        // fill: false,
        // backgroundColor: ["#81C784", "#FF8A80", "#64B5F6"],
        // borderColor: ["#66BB6A", "#FF5252", "#42A5F5"],
        backgroundColor: [
          "rgba(62,62,62 , .2)",
          "rgba(62,62,62 , .8)",
          "rgba(62,62,62 , .5)",
        ],
        borderColor: "rgba(69,69,69 , 1)",
      },
    ],
  },
];

export default data;
