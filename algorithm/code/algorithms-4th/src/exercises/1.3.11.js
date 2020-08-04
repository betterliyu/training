const evaluatePostfix = (exp) => {
  const expArray = exp.split(' ');
  const datas = [];

  for (let i = 0; i < expArray.length; i += 1) {
    const ele = expArray[i];
    if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
      const data2 = datas.pop();
      const data1 = datas.pop();
      let res = 0;
      if (ele === '-') res = parseFloat(data1, 10) - parseFloat(data2, 10);
      if (ele === '*') res = parseFloat(data1, 10) * parseFloat(data2, 10);
      if (ele === '+') res = parseFloat(data1, 10) + parseFloat(data2, 10);
      if (ele === '/') res = parseFloat(data1, 10) / parseFloat(data2, 10);
      datas.push(res);
    } else {
      datas.push(ele);
    }
  }
  return datas.pop();
};

exports.evaluatePostfix = evaluatePostfix;
