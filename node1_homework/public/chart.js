const labels = grades.split(',');

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Student Grade',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: names.split(','),
        },
    ],
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const myChart = new Chart(document.getElementById('myChart'), config);
