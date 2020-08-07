const getCompleteExpression = (exp) => {
  const expression = exp.split(' ');
  const datas = [];
  const ops = [];
  for (let i = 0; i < expression.length; i += 1) {
    const ele = expression[i];
    if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
      ops.push(ele);
    } else if (ele === ')') {
      const data1 = datas.pop();
      const data2 = datas.pop();
      const op = ops.pop();
      datas.push(`( ${data2} ${op} ${data1} )`);
    } else {
      datas.push(ele);
    }
  }
  return datas.pop();
};

module.exports = {
  getCompleteExpression,
};
