export const evaluatePostfix = (exp: string): string => {
  const expArray = exp.split(' ');
  const data = [];

  for (let i = 0; i < expArray.length; i += 1) {
    const ele = expArray[i];
    if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
      const data2 = data.pop();
      const data1 = data.pop();
      let res = 0;
      if (ele === '-') res = parseFloat(data1) - parseFloat(data2);
      if (ele === '*') res = parseFloat(data1) * parseFloat(data2);
      if (ele === '+') res = parseFloat(data1) + parseFloat(data2);
      if (ele === '/') res = parseFloat(data1) / parseFloat(data2);
      data.push(res);
    } else {
      data.push(ele);
    }
  }
  return data.pop();
};
