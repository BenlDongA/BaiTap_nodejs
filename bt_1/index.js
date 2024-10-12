import http from "node:http";
import os from "node:os"; 
import fs from 'node:fs';
import EventEmitter from "node:events";
const eventEmitter = new EventEmitter();

eventEmitter.on('taskCompleted', () => {
  console.log('Completed task!');
});
const SysPC = {
  OSType: os.type(),
  Platform: os.platform(),
  RAM: os.totalmem(),
  USEDRAM: os.totalmem() - os.freemem(),
  CPU: os.cpus().map(cpu => ({
    model: cpu.model,
    speed: cpu.speed,
    times: cpu.times
  }))
};

const jsonResponse = JSON.stringify(SysPC, null, 2);
const printfile = "D:/homework/text.txt";
fs.writeFileSync(printfile, jsonResponse);
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  response.write(jsonResponse);
  response.end(); 
});


server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
  eventEmitter.emit('taskCompleted'); 

});
