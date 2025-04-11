const ctx = document.getElementById('myChart').getContext('2d'); // Ensure you have a canvas element with id="myChart"

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Excel', 'Python', 'HTML', 'Tableau', 'SQL', 'R'], // Example labels
        datasets: [{
            label: '# of Projects',
            data: [12, 20, 7, 5, 5, 3], // Example data
            backgroundColor: [
                'rgba(99, 255, 133, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgb(81, 181, 0)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Set legend label color to white
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white' // Set x-axis label color to white
                }
            },
            y: {
                ticks: {
                    color: 'white' // Set y-axis label color to white
                },
                beginAtZero: true // Ensure the y-axis starts at zero
            }
        }
    }
});