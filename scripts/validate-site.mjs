import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const pagesDirectory = join(root, 'src/pages');
const requiredRoutes = ['index', 'works', 'projects', 'art-education', 'about', 'contact'];
const errors = [];

for (const route of requiredRoutes) {
  const file = join(pagesDirectory, `${route}.astro`);
  if (!existsSync(file)) errors.push(`Missing required route: ${route}`);
}

const sourceFiles = [];
const collectFiles = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectFiles(path);
    else if (['.astro', '.ts', '.css'].includes(extname(path))) sourceFiles.push(path);
  }
};
collectFiles(join(root, 'src'));

const publicAssetPattern = /(?:src|href|image:)\s*[={]?['"](\/[^'"#?]+\.[a-z0-9]+)['"]/gi;
for (const file of sourceFiles) {
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(publicAssetPattern)) {
    const asset = join(root, 'public', match[1]);
    if (!existsSync(asset)) errors.push(`Missing asset ${match[1]} referenced by ${file.slice(root.length)}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${requiredRoutes.length} routes and public asset references across ${sourceFiles.length} source files.`);
