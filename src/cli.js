#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { ManhattanTransform } from './streams/transform.js';

program
  .requiredOption('-t, --task <type>', 'task name')
  .option('-i, --input <file>', 'input file')
  .option('-o, --output <file>', 'output file');

program.parse();

const options = program.opts();

if (options.task !== 'manhattan') {
  console.error('Unknown task');
  process.exit(1);
}

let inputStream;
let outputStream;

// INPUT
if (options.input) {
  if (!fs.existsSync(options.input)) {
    console.error('Input file not found');
    process.exit(1);
  }
  inputStream = fs.createReadStream(options.input);
} else {
  inputStream = process.stdin;
}

// OUTPUT
if (options.output) {
  outputStream = fs.createWriteStream(options.output);
} else {
  outputStream = process.stdout;
}

// PIPELINE
pipeline(
  inputStream,
  new ManhattanTransform(),
  outputStream
).catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});