const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Nombre de la ciudad y pais para obtener el clima",
    demand: true
  }
}).argv;

module.exports = {
  argv
};
