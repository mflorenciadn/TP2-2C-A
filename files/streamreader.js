const fs = require('fs');
const path = './bigfile.txt';
const path2= './bigfilecopy.txt';

const readable = fs.createReadStream(path, {encoding: 'utf-8', highWaterMark: 10240});
const writable = fs.createWriteStream(path2);

readable.on('data', chunk => {
    console.log('=====================');
    console.log(chunk);
});

readable.pipe(writable);