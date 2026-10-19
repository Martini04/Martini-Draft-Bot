import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const dataFile = path.join(currentDirectory, 'data.json');


export function loadData() {
  if (!fs.existsSync(dataFile)) {
    saveData({
      tournaments: {},
      signups: {},
      rosters: {},
      drafts: {},
      matches: {},
    });
  }

  return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}


export function saveData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}
