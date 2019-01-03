<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Click on the yellow refresh button to randomize the graph and table</h2>
    <v-layout row>
      <v-flex xs6>
    <v-card>
      <v-card-title class="#00838f cyan darken-3" style="overflow:visible;">
        <div primary-title class="white--text" :style="{fontWeight:'bold'}">SAMPLE DATA</div>
        <v-btn fab dark small color="orange" @click="changeNumbers()">
            <v-icon>refresh</v-icon>
          </v-btn>
      </v-card-title>
     <v-data-table
    :headers="headers"
    :items="results"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.randomValue1 }}</td>
      <td>{{ props.item.randomValue2 }}</td>
      <td>{{ props.item.randomValue3 }}</td>
    </template>
  </v-data-table>
    </v-card>
      </v-flex>
      <v-flex xs6>
        <canvas id="sample-chart"></canvas>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Chart from 'chart.js';
import sampleChartData from '../chart-data';
export default {
  name: 'HelloWorld',
  data () {
    return {
      sampleChartData: sampleChartData,
      msg: 'SAMPLE PROJECT',
       headers: [
          {
            text: 'Random no 1',
            sortable: false,
            value: 'randomValue1'
          },
          { text: 'Random no 2', value: 'randomValue2' },
          { text: 'Random no 3', value: 'randomValue3' }
        ],
        numbers: [
          {
            randomValue1: 56,
            randomValue2: 518,
            randomValue3: 26
          }
        ]
    }
  },
  computed: {
    results:  {
      get: function () {
        console.log('numbers', this.numbers)
         return this.numbers
      },
      set: function(param) {
         this.numbers[0].randomValue1 = param[0].randomValue1
         this.numbers[0].randomValue2 = param[0].randomValue2
         this.numbers[0].randomValue3 = param[0].randomValue3
         console.log('new numbers set is ', this.numbers)
      }
    }
  },
  methods: {
    changeData: function () {
     this.populateChartRandomly()
     this.createChart('sample-chart', this.sampleChartData)
    },
    changeNumbers: function () {
      this.results = this.fillNumbersRandomly()
      console.log('CHANGED RESULTS', this.results)
      this.changeData()
    },
    createChart (chartId, chartData) {
      const ctx = document.getElementById(chartId)
      console.log('tag', chartData.data.datasets[0].data)
      /* eslint-disable no-new */
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    },
    fillNumbersRandomly: function () {
      var randomObj = []
      var randomObjValue = {
        randomValue1: this.generateRandomInt(),
        randomValue2: this.generateRandomInt(),
        randomValue3: this.generateRandomInt()
      }
      randomObj[0] = randomObjValue
      return randomObj
    },
    generateRandomInt: function () {
      return Math.floor(Math.random() * 100) + 1
    },
    populateChartRandomly: function () {
      this.sampleChartData.data.datasets[0].data[0] = this.results[0].randomValue1
      this.sampleChartData.data.datasets[0].data[1] = this.results[0].randomValue2
      this.sampleChartData.data.datasets[0].data[2] = this.results[0].randomValue3
      console.log('BRO whats wrong', this.results)
    },

  },
  mounted() {
    this.changeData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
