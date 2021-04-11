export const getCompleteExpression = (exp: string): string => {
  const expression = exp.split(' ');
  const data: string[] = [];
  const ops = [];
  for (let i = 0; i < expression.length; i += 1) {
    const ele = expression[i];
    if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
      ops.push(ele);
    } else if (ele === ')') {
      const data1 = data.pop();
      const data2 = data.pop();
      const op = ops.pop();
      data.push(`( ${data2} ${op} ${data1} )`);
    } else {
      data.push(ele);
    }
  }
  return data.pop();
};
