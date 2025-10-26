import fs from 'node:fs'

const remove = async () => {
  fs.unlink('fileToRemove.txt');
  if (fs.existsAsync('fileToRemove.txt'))
throw new Error('FS operation failed');
  
};

await remove();
