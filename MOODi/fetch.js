const fetch = require("node-fetch");

class Fetch {
    async getCurrent(input) {
      const myKey = "57100a6acd8ac61a3f2bb25af69c0fdb";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }