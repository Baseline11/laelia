/* eslint-disable no-console */

import path from 'path';
import fse from 'fs-extra';

const files = ['src/index.js'];

function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../../lib/', path.basename(file));

  return new Promise(resolve => {
    fse.copy(file, buildPath, err => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function createPackageFile() {
  return new Promise(resolve => {
    fse.readFile(path.resolve(__dirname, '../../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      const {name, version, author, license, description, peerDependencies} = packageData;

      const minimalPackage = {
        name,
        version,
        author,
        license,
        description,
        scripts: {
          postinstall: 'babel-node ./src/scripts/move-files.js'
        },
        peerDependencies,
        main: './index.js',
        module: './index.js',
        private: true
      };

      return new Promise(resolve => {
        const buildPath = path.resolve(__dirname, '../../lib/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, err => {
          if (err) throw err;
          console.log(`Created package.json in ${buildPath}`);
          resolve();
        });
      });
    });
}

Promise.all(files.map(file => copyFile(file)))
  .then(() => createPackageFile());
