/* eslint-disable no-console */

import path from 'path';
import fse from 'fs-extra';

const files = ['lib/**/*.*'];


function moveFile(file) {
  const rootPath = path.resolve(__dirname, '../', path.basename(file));

  return new Promise(resolve => {
    fse.copy(file, rootPath, err => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Moved ${file} to ${rootPath}`));
}

Promise.all(files.map(file => moveFile(file)));
