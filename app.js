const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

//console.log(argv.direccion);
// lugar
//   .getLugarLatLng(argv.direccion)
//   .then(console.log)
//   .catch(console.log);

// clima
//   .getClima(32.580002, -114.839996)
//   .then(console.log)
//   .catch(console.log);
//const direccion = argv.direccion;

const getInfo = async direccion => {
  try {
    const coordenadas = await lugar.getLugarLatLng(direccion);
    const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
    return `El clima de ${coordenadas.ubicacion} es de ${temperatura}`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`, e;
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
