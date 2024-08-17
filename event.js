const EventEmitter = require('events');
const http = require('http');

/*
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new EventEmitter();

myEmitter.on('newSale', (productName, _, quantity) => {
  console.log(`You have ordered ${quantity} ${productName}`);
});

myEmitter.on('newSale', (_, unitPrice, quantity) => {
  console.log(`Your total amount due is ${unitPrice * quantity}`);
});

myEmitter.on('newCustomer', (name, address, email) => {
  console.log(`Congratulation!!! You have successfully registered as a new member with details as: 
    Name: ${name}
    Address: ${address}
    Email: ${email}`);
});

myEmitter.emit('newSale', 'Gutter', 16, 3);
myEmitter.emit(
  'newCustomer',
  'Kim Long Ngo',
  '107 Pegasus',
  'kimlngo@gmail.com'
);
*/

//////////////////////////////////////////
const httpServer = http.createServer();
httpServer.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Request Received</h1>');
});

httpServer.on('request', (req, res) => {
  console.log('Another request');
});

httpServer.on('close', () => {
  console.log('Server Closed');
});

httpServer.listen(8080, '127.0.0.1', () => {
  console.log('Server started, up and running');
});
