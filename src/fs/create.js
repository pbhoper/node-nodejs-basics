import fs from 'node:fs'

const create = async () => {
  const Path = 'fresh.txt';
  const Content = 'I am fresh and young';
  if (fs.existsSync(Path)) {
    throw new Error('FS operation failed');
    } else {
      fs.writeFile(Path, Content, (err) => {

        console.log('create file')
      if (err) {
        console.error(err);
      }
    });
  }
};

await create();
