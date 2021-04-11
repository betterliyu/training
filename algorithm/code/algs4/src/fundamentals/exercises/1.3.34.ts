import { RandomBag } from '../apis/RandomBag';

// test
const bag = new RandomBag();
bag.add(1);
bag.add(2);
bag.add(3);
bag.add(4);
bag.add(5);
bag.add(6);
for (const b of bag) {
  console.log(b);
}
