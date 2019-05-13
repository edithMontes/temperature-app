const axios = require("axios");

const getLugarLatLng = async direccion => {
  const encodedUrl = encodeURI(direccion); //permite llenar espacios en blanco con caracteres validos en una url
  //console.log(encodedUrl);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      "X-RapidAPI-Key": "835f98ca5dmsh34ac7a50c69ba82p1afcdfjsnf41f3e2a1639"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No se encontraron datos para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const ubicacion = data.name;
  const lat = data.lat;
  const lng = data.lon;
  return {
    ubicacion,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};
