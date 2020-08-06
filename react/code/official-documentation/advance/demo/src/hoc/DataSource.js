import { EventEmitter } from 'events';

class DataSource extends EventEmitter {
  constructor() {
    super();
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count += 1;
    this.emit('COUNT_INCREASE');
  }
}

export default new DataSource();
