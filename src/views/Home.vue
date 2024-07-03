<template>
  <div>
    <b-row>
      <b-col>
        <b-card class="earnings-card">
          <b-row>
            <b-col cols="6">
              <b-card-title class="mb-1">
                Earnings
              </b-card-title>
              <div class="font-small-2">
                This Month
              </div>
              <h5 class="mb-1">
                $4055.56
              </h5>
              <b-card-text class="text-muted font-small-2">
                <span class="font-weight-bolder">68.2%</span
                ><span> more earnings than last month.</span>
              </b-card-text>
            </b-col>
            <b-col cols="6">
              <!-- chart -->
              <vue-apex-charts
                height="120"
                :options="earningsChart.chartOptions"
                :series="earningsChart.series"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="card-tiny-line-stats" body-class="pb-50">
          <h6>Profit</h6>
          <h2 class="font-weight-bolder mb-1">
            6,24k
          </h2>
          <!-- chart -->
          <vue-apex-charts
            height="70"
            :options="statisticsProfit.chartOptions"
            :series="statisticsProfit.series"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <b-row class="pb-50">
        <b-col
          lg="6"
          cols="12"
          order-lg="2"
          order="1"
          class="d-flex justify-content-between flex-column text-right"
        >
          <div>
            <b-dropdown
              text="Last 7 Days"
              variant="transparent"
              class="chart-dropdown"
              left
              no-caret
              size="sm"
            >
              <b-dropdown-item v-for="day in avgData.lastDays" :key="day">
                {{ day }}
              </b-dropdown-item>
            </b-dropdown>
          </div>

          <!-- apex chart -->
          <vue-apex-charts
            type="bar"
            height="200"
            :options="salesBar.chartOptions"
            :series="salesBar.series"
          />
        </b-col>
      </b-row>
      <hr />
    </b-card>
    <b-card no-body>
    <b-card-body class="pb-0">
      <b-avatar
        class="mb-1"
        :variant="`light-${color}`"
        size="45"
      >
        <feather-icon
          size="21"
          :icon="icon"
        />
      </b-avatar>
      <div class="truncate">
        <h2 class="mb-25 font-weight-bolder">
         asdssd
        </h2>
        <span>asdsad</span>
      </div>
    </b-card-body>

    <vue-apex-charts
      type="area"
      height="100"
      width="100%"
      :options="chartOptionsComputed"
      :series="chartData"
    />

  </b-card>    

  </div>
</template>
<script>


import { areaChartOptions } from './chartOptions'
import Ripple from "vue-ripple-directive";

import {
  BCard,
  BRow,
  BCol,
  BCardTitle,
  BCardText,
  BDropdown,
  BDropdownItem,
   BCardBody, BAvatar
} from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";
const $trackBgColor = "#EBEBEB";
const $earningsStrokeColor2 = "#28c76f66";
const $earningsStrokeColor3 = "#28c76f33";
export default {
  components: {
    BCard,
    BRow,
    BCol,
    BCardTitle,
    BCardText,
    VueApexCharts,
    BDropdown,
    BDropdownItem,
     BCardBody, BAvatar
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      earningsChart: {
        series: [53, 16, 31],
        chartOptions: {
          chart: {
            type: "donut",
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: { show: false },
          comparedResult: [2, -3, 8],
          labels: ["App", "Service", "Product"],
          stroke: { width: 0 },
          colors: [
            $earningsStrokeColor2,
            $earningsStrokeColor3,
            $themeColors.success,
          ],
          grid: {
            padding: {
              right: -20,
              bottom: -8,
              left: -20,
            },
          },
          plotOptions: {
            pie: {
              startAngle: -10,
              donut: {
                labels: {
                  show: true,
                  name: {
                    offsetY: 15,
                  },
                  value: {
                    offsetY: -15,
                    formatter(val) {
                      // eslint-disable-next-line radix
                      return `${parseInt(val)}%`;
                    },
                  },
                  total: {
                    show: true,
                    offsetY: 15,
                    label: "App",
                    formatter() {
                      return "53%";
                    },
                  },
                },
              },
            },
          },
          responsive: [
            {
              breakpoint: 1325,
              options: {
                chart: {
                  height: 100,
                },
              },
            },
            {
              breakpoint: 1200,
              options: {
                chart: {
                  height: 120,
                },
              },
            },
            {
              breakpoint: 1045,
              options: {
                chart: {
                  height: 100,
                },
              },
            },
            {
              breakpoint: 992,
              options: {
                chart: {
                  height: 120,
                },
              },
            },
          ],
        },
      },
      statisticsProfit: {
        series: [
          {
            data: [0, 20, 5, 30, 15, 45],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          grid: {
            borderColor: $trackBgColor,
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: -30,
              bottom: -10,
            },
          },
          stroke: {
            width: 3,
          },
          colors: [$themeColors.info],
          markers: {
            size: 2,
            colors: $themeColors.info,
            strokeColors: $themeColors.info,
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [
              {
                seriesIndex: 0,
                dataPointIndex: 5,
                fillColor: "#ffffff",
                strokeColor: $themeColors.info,
                size: 5,
              },
            ],
            shape: "circle",
            radius: 2,
            hover: {
              size: 3,
            },
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontSize: "0px",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          tooltip: {
            x: {
              show: false,
            },
          },
        },
      },
      avgData: {},
      salesBar: {
        series: [
          {
            name: "Sessions",
            data: [75, 125, 225, 175, 125, 75, 25],
          },
        ],
        chartOptions: {
          chart: {
            sparkline: { enabled: true },
            toolbar: { show: false },
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
            },
          },
          states: {
            hover: {
              filter: "none",
            },
          },
          colors: [
            "#ebf0f7",
            "#ebf0f7",
            $themeColors.primary,
            "#ebf0f7",
            "#ebf0f7",
            "#ebf0f7",
          ],
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
              endingShape: "rounded",
            },
          },
          tooltip: {
            x: { show: false },
          },
          xaxis: {
            type: "numeric",
          },
        },
      },
    };
  },
  created() {
    this.$http.get("/card/card-analytics/avg-sessions").then((res) => {
      this.avgData = res.data;
    });
  },
  methods: {
    
  },
   props: {
    icon: {
      type: String,
      required: true,
    },
    statisticTitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    chartOptions: {
      type: Object,
      default: null,
    },
  },
  computed: {
    chartOptionsComputed() {
      if (this.chartOptions === null) {
        const options = JSON.parse(JSON.stringify(areaChartOptions))
        options.theme.monochrome.color = $themeColors[this.color]
        return options
      }
      return this.chartOptions
    },
  },
};
</script>
