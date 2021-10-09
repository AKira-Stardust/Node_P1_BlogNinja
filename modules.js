const { names, ages } = require("./people");
const os = require("os");

console.log(ages, names);

console.log(os.platform(), os.homedir());