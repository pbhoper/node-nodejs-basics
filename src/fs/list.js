import fs from 'node:fs'

const list = async () => {
const dirPath = 'files'
fs.readdir(dirPath, (err, files) => {
 if (err) 
  throw new Error('FS operation failed');
});
};

await list();
