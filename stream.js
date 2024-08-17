const fs = require('fs');
const server = require('http').createServer(); //quick way to create server

server.on('request', (req, res) => {
  //Solution 1: load the entire file into memory and then send back to the client
  // fs.readFile('./test-file.txt', (err, data) => {
  //   if (err) console.error(err);
  //   res.end(data);
  // });
  //Solution 2: use Streams
  // const readable = fs.createReadStream('./test-file.txt');
  // //send back the response chunk as long as they're available
  // readable.on('data', chunk => {
  //   res.write(chunk);
  // });
  // //signal to the client that all data has been read
  // readable.on('end', () => {
  //   res.end();
  // });
  // //on error case
  // readable.on('error', err => {
  //   console.error(err);
  //   res.statusCode = 500;
  //   res.end('File not found');
  // });
  //Solution 3: Use pipe operator
  const readable = fs.createReadStream('./test-file.txt');
  readable.pipe(res);
  //readableSource.pipe(writableDestination);
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Server is up and running');
});
