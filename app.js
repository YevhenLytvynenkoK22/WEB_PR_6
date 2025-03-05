const math = require("./math");
const fs = require("fs");
const os = require("os");
const chalk = require("chalk");
const { EventEmitter } = require("stream");

console.log("Hello, Node.js!");
console.log(math.sum(5, 7));
fs.writeFileSync("data.txt", "Node.js - це потунжо!");
fs.promises.readFile("data.txt", "utf-8").then(data => console.log(data));
console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));
console.log(os.type());
console.log(os.arch());
console.log(os.freemem());
console.log(chalk.blue("Hello, Garik!"));

const event = new EventEmitter();
event.on('greet', ()=>{
    
    console.log("Привіт Node.js!");
})
setTimeout(() => {
    event.emit('greet');
  }, 2000);

  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())  
  .then((data) => console.log(data))    
