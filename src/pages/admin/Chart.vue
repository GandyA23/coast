<template>
  <div class="q-ma-xl cf-body cc-pri">
    <h4 class="q-ma-none q-mt-lg cf-title">Charts</h4>
    <div class="row q-mt-lg">
      <div class="offset-md-1 offset-sm-1 col-xs-12 col-sm-5 col-md-5">
        <ChartJs v-bind="doughnutChart" />
      </div>
      <div class="offset-md-1 offset-sm-1 col-xs-12 col-sm-5 col-md-5">
        <ChartJs v-bind="pieChart" />
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="offset-md-1 offset-sm-1 col-xs-12 col-sm-5 col-md-5">
        <ChartJs v-bind="radarChart" />
      </div>
      <div class="offset-md-1 offset-sm-1 col-xs-12 col-sm-5 col-md-5">
        <ChartJs v-bind="barChart" />
      </div>
    </div>
  </div>
</template>

<script>

import ChartJs from 'components/ChartJs.vue'

export default {
  name: 'Chart',
  components: { ChartJs },
  data () {
    return {
      doughnutChart: {
        id: 'doughnut-chart',
        data: {
          type: 'doughnut',
          data: {
            labels: ['Value1', 'Value2', 'Value3', 'Value4'],
            datasets: [
              {
                label: 'Values',
                backgroundColor: ['#0D2535', '#5388D8', '#B1D4E0', '#2E8BC0'],
                data: [2478, 5267, 734, 784]
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
              }
            }
          }
        }
      },
      pieChart: {
        id: 'pie-chart',
        data: {
          type: 'pie',
          data: {
            labels: ['Value1', 'Value2', 'Value3', 'Value4'],
            datasets: [
              {
                label: 'Values',
                backgroundColor: ['#0D2535', '#5388D8', '#B1D4E0', '#2E8BC0'],
                data: [2478, 5267, 734, 784]
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Pie Chart'
              }
            }
          }
        }
      },
      radarChart: {
        id: 'radar-chart',
        data: {
        type: 'radar',
        data: {
          labels: ['Value1', 'Value2', 'Value3', 'Value4', 'Value5'],
          datasets: [
            {
              label: 'Value1',
              fill: true,
              backgroundColor: 'rgba(13,37,53,0.2)',
              borderColor: 'rgba(46,139,192,1)',
              pointBorderColor: '#fff',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              data: [8.77, 55.61, 21.69, 6.62, 6.82],
              borderWidth: 1.5
            }, {
              label: 'Value2',
              fill: true,
              backgroundColor: 'rgba(177,212,224,0.2)',
              borderColor: 'rgba(83,136,216,1)',
              pointBorderColor: '#fff',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              data: [25.48, 54.16, 7.61, 8.06, 4.45],
              borderWidth: 1.5
            }
          ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Radar Chart'
              }
            }
          }
        },
      },
      barChart: {
        id: 'bar-chart',
        data: {
          type: 'bar',
          data: {
            labels: ['Value1', 'Value2', 'Value3', 'Value4'],
            datasets: [
              {
                label: 'Values1',
                backgroundColor: ['#0D2535', '#5388D8', '#B1D4E0', '#2E8BC0'],
                data: [2478, 5267, 734, 784]
              },
              {
                label: 'Values2',
                backgroundColor: ['#0D2537', '#5388D7', '#B1D4E7', '#2E8BC7'],
                data: [1478, 3267, 1734, 1784]
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Bar Chart'
              }
            }
          }
        }
      }
    }
  }
}
</script>>
