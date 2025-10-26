import fs from 'node:fs'

const rename = async () => {
  fs.promises.rename ('wrongFilename.txt' , 'properFilename.md')
  if (fs.existsSync(filePath)) {
    throw new Error('FS operation failed');
  }
};

await rename();
