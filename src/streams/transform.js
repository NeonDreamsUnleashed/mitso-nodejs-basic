import { Transform } from 'stream';
import { manhattanDistance } from '../tasks/manhattan.js';

export class ManhattanTransform extends Transform {
  constructor() {
    super();
    this.buffer = '';
  }

  _transform(chunk, encoding, callback) {
    this.buffer += chunk.toString();

    const lines = this.buffer.split('\n');
    this.buffer = lines.pop(); // остаток

    for (const line of lines) {
      if (!line.trim()) continue;

      try {
        const [p1, p2] = line.trim().split(' ').map(JSON.parse);
        const result = manhattanDistance(p1, p2);
        this.push(result + '\n');
      } catch (err) {
        return callback(err);
      }
    }

    callback();
  }

  _flush(callback) {
    if (this.buffer.trim()) {
      try {
        const [p1, p2] = this.buffer.trim().split(' ').map(JSON.parse);
        const result = manhattanDistance(p1, p2);
        this.push(result + '\n');
      } catch (err) {
        return callback(err);
      }
    }
    callback();
  }
}