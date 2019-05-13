const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=118a8f2b09a39fda9dff35a5ab39bd8f&units=metric`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima
};
