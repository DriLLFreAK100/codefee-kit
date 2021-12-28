/**
 * Temporary solution to resolve TS path aliases
 * Need to be tested fully before dist as package - Regex pattern coverage, make async, etc.
 * 
 * USE AT OWN RISK!
 */

const fs = require('fs');

const resolveTsPaths = ({
  outputTarget = './dist',
  paths = [
    'common',
    'components',
    'hooks',
    'styles',
    'utils',
  ],
} = {}) => {
  const resolveFilesInDir = (level = 0, root = outputTarget) => {
    const dirs = fs.readdirSync(root);

    dirs.forEach(dir => {
      const fullDir = `${root}/${dir}`;

      if (fs.lstatSync(fullDir).isDirectory()) {
        resolveFilesInDir(level + 1, fullDir);
        return;
      }

      if (dir.endsWith('.d.ts')) {
        let fileData = fs.readFileSync(fullDir).toString('utf-8');
        const prefix = [...Array(level).keys()].reduce((a, c) => a.concat('../'), '');

        paths.forEach(path => {
          fileData = fileData.replace(`from '${path}`, `from '${prefix}${path}`);
        });

        fs.writeFileSync(fullDir, fileData);
      }
    });
  }

  resolveFilesInDir();
};

resolveTsPaths();