<template>
  <table v-if="currentWeather[Object.keys(currentWeather)[0]]" class="border border-black border-solid mx-auto my-2">
    <tr>
      <td></td>
      <th
        v-for="day in currentWeather[Object.keys(currentWeather)[0]].daily"
        :key="day.dt"
        class="border border-black border-solid p-1 px-4"
      >
        {{ convertUnix(day.dt, "weekDay") }}<br />{{
          convertUnix(day.dt, "shortDate")
        }}
      </th>
    </tr>
    <tr v-for="keyName in sortedKeys" :key="keyName" class="border-t border-black border-solid">
      <td class="p-2">{{ keyName }}</td>
      <td v-for="day in currentWeather[keyName].daily" :key="day.dt"
      :class="{'bg-red-700 text-white': day.temp.max > this.maxRoof, 'bg-blue-500 text-white': day.temp.min < this.minRoof}"
      class="border border-black border-solid">{{Math.round(day.temp.min)}} - {{Math.round(day.temp.max)}} °F</td>
    </tr>
  </table>
</template>

<script>
import { warehouses, convertUnix } from "../utils";
import axios from 'axios';

export default {
  data() {
    return {
        //store weather data
        currentWeather: {},
        maxRoof: 77,
        minRoof: 50,
        maxClass: 'bg-red-300 text-white',
        minClass: 'bg-blue-300 text-white'
    };
  },
  mounted(){
      //get data from openweather
      warehouses.forEach(warehouse => {
          this.GetWeather(warehouse.name, warehouse.lat, warehouse.lon);
      });
  },
  computed: {
      sortedKeys: function(){
          return Object.keys(this.currentWeather).sort();
      }
  },
  methods: {
    //method to send request and populate currentWeather dict
    GetWeather: function (name, lat, lon) {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            lon +
            "&exclude=current,minutely,hourly&appid=610fefee61810da466d8c21ab3b026c9&units=imperial"
        //"https://api.openweathermap.org/data/2.5/forecast/daily?zip=91911,us" + "&cnt=8&appid=610fefee61810da466d8c21ab3b026c9&units=imperial"
        )
        .then((response) => {
          if (response.status === 200) {
              this.currentWeather[name] = response.data;
          }
        })
        .catch(function (error) {
          alert("no weather: " + error.message);
        });
    },
    convertUnix: convertUnix,
  },
};
</script>
