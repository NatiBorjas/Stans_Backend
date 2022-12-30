const { Router } = require("express");
const parseArgs = require("minimist");
const os = require("os");
const perfilRouter = Router();

// const infoRouter = (req, res) => {
//   try {
//     const args = parseArgs(process.argv.slice(2));
//     const info = {
//       argumentos: JSON.stringify(args),
//       directorioActual: process.cwd(),
//       idProceso: process.pid,
//       vNode: process.version,
//       rutaEjecutable: process.execPath,
//       sistemaOperativo: process.platform,
//       memoria: JSON.stringify(process.memoryUsage().rss, null, 2),
// 			processNum: os.cpus().length,
//     };
// 		// console.log(info);
//     res.render("pages/info", info);
//   } catch (error) {
//     res.render(error.message);
//   }
// };

perfilRouter.get("/miperfil", (req, res) => {
  try {
    const info = {
      argumentos: JSON.stringify(args),
      directorioActual: process.cwd(),
      idProceso: process.pid,
      vNode: process.version,
      rutaEjecutable: process.execPath,
      sistemaOperativo: process.platform,
      memoria: JSON.stringify(process.memoryUsage().rss, null, 2),
      processNum: os.cpus().length,
    };

    res.render("pages/miperfil", info);
  } catch (error) {
    res.render(error.message);
  }
});
module.exports = perfilRouter