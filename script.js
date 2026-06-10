const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => links.classList.toggle('active'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('active'));
});

const chartFont = {
  family: 'Arial, Helvetica, sans-serif',
  size: 12,
  weight: 'bold'
};

const activities = ['Act. 1', 'Act. 2', 'Act. 3', 'Act. 4', 'Act. 5', 'Act. 6'];
const fullLabels = [
  'Reparar alcantarillado',
  'Coordinación con autoridades',
  'Mantenimiento preventivo',
  'Políticas municipales',
  'Campañas de concientización',
  'Brigadas vecinales'
];
const durationData = [10, 10, 10, 10, 10, 10];
const budgetData = [10000, 6000, 30000, 50000, 8000, 20000];

const durationCanvas = document.getElementById('durationChart');
if (durationCanvas && window.Chart) {
  new Chart(durationCanvas, {
    type: 'bar',
    data: {
      labels: fullLabels,
      datasets: [{
        label: 'Días programados',
        data: durationData,
        backgroundColor: ['#3f7f2a','#3f7f2a','#f3b300','#f3b300','#f07818','#f07818'],
        borderRadius: 10,
        barThickness: 20
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => `${ctx.raw} días` } } },
      scales: {
        x: { beginAtZero: true, max: 12, ticks: { font: chartFont, callback: value => `${value} d` } },
        y: { ticks: { font: chartFont } }
      }
    }
  });
}

const budgetCanvas = document.getElementById('budgetChart');
if (budgetCanvas && window.Chart) {
  new Chart(budgetCanvas, {
    type: 'bar',
    data: {
      labels: activities,
      datasets: [{
        label: 'Presupuesto estimado',
        data: budgetData,
        backgroundColor: ['#3f7f2a','#3f7f2a','#f3b300','#f3b300','#f07818','#f07818'],
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { title: items => fullLabels[items[0].dataIndex], label: ctx => `$${ctx.raw.toLocaleString('es-MX')}` } }
      },
      scales: {
        y: { beginAtZero: true, ticks: { font: chartFont, callback: value => `$${Number(value).toLocaleString('es-MX')}` } },
        x: { ticks: { font: chartFont } }
      }
    }
  });
}
