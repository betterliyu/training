const get = (obj, path, defaultValue) => {
  let pathArr = path;
  if (typeof path == 'string') {
    // const pathStr = path.replace(/[\[\]]/g, '.').replace(/\.+/g, '.');
    const pathStr = path.replace(/\[(\d)\]/g, '.$1');
    pathArr = pathStr.split('.');
  }
  let pos = 0;
  let o = obj;
  while (pos < pathArr.length) {
    let key = pathArr[pos++];
    if (o[key]) {
      o = o[key];
    } else {
      return defaultValue;
    }
  }
  return o;
}

console.log(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c'))
console.log(get({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c']))
console.log(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a.b.c', 'default'))