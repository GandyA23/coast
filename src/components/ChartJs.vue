<template>
  <canvas :id="chartId"> </canvas>
</template>

<script>

import Chart from 'chart.js/auto'

export default {
  name: 'ChartJs',
  props: {
    id: {
      type: String
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      chartId: this.id,
      dataChart: this.data
    }
  },
  methods: {
    /**
     * Crea un nuevo chart dentro de la etiqueta canvas
     */
    createChart (chartId, dataChart) {
      const ctx = document.getElementById(chartId)

      const chart = new Chart(ctx, dataChart)

      return chart
    }
  },
  mounted () {
    console.log('this.dataChart', this.dataChart)
    this.createChart(this.chartId, this.dataChart)
  }
}
</script>>
