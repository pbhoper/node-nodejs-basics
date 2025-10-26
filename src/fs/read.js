import fs from 'node:fs'

const read = async () => {
  fs.readFile('fileToRead.txt', 'utf8', (err, data) => {
    if (err)
       throw new Error('FS operation failed');
 });
};
await read();
