import fs from 'node:fs'

const remove = async () => {
  fs.unlinkSync('fileToRemove.txt');
  if (fs.existsSync('fileToRemove.txt'))
throw new Error('FS operation failed');
  
};

await remove();
