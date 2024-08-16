$(function () {
    // chart5
    var ctx = document.getElementById('chart5').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Bolt & Nut',
                'Lubrikasi',
                'Pneumatic',
                'Hydraulic',
                'Drive & Transmission',
                'Process Condition',
                'Production Business Process Knowledge',
                'FMEA (Failure Mode and Effects Analysis)',
                'PM (Physical - Mechanism) Analysis',
                '% Functional Competency'
            ],
            datasets: [{
                label: 'Target',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'Actual',
                data: [66.6, 80, 60, 66.67, 66.67, 50, 100, 25, 25, 60],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    display: true,
                }
            },
            elements: {
                line: {
                    borderWidth: 2
                }
            },
            scales: {
                r: {
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 10,
                        textStrokeColor: 'rgb(54, 162, 235)',
                        color: 'rgba(240, 240, 240, 0.5)',
                        backdropColor: 'rgb(47, 56, 62)'
                    },
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.5)',
                    },

                    grid: {
                        color: "rgba(255, 255, 255, 0.5)",
                    },

                },
            },
        },
    });
});