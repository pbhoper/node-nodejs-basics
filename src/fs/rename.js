import fs from 'node:fs'

const rename = async () => {
  fs.rename ('wrongFilename.txt' , 'properFilename.md')
  if (fs.existAsync(filePath)) {
    throw new Error('FS operation failed');
  }
};

await rename();
