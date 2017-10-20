const path = require('path');

const entry = (file) => path.resolve(__dirname, `../src/${file}`);
const workSpace = (folder) => path.resolve(__dirname, `../${folder}`);

module.exports = { entry, workSpace };
