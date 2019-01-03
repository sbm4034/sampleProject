export const sampleChartData = {
  type: 'line',
  data: {
    labels: ['Random no 1', 'Random no 2', 'Random no 3'],
    datasets: [
      { // one line graph
        label: 'Random numbers',
        // data: [56, 518, 26],
        data: [],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Blue
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d'
        ],
        borderWidth: 5
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25
        }
      }]
    }
  }
}

export default sampleChartData
