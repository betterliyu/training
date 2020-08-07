// 必须带括号
const infixToPostfixStrict = (exp) => {
  const expArray = exp.split(' ');
  const datas = [];
  const ops = [];
  for (let i = 0; i < expArray.length; i += 1) {
    const ele = expArray[i];
    if (ele === '(');
    else if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
      ops.push(ele);
    } else if (ele === ')') {
      const data2 = datas.pop();
      const data1 = datas.pop();
      datas.push(`${data1} ${data2} ${ops.pop()}`);
    } else {
      datas.push(ele);
    }
  }
  return datas.pop();
};

// 乘除不用带括号
const infixToPostfix = (exp) => {
  const expArray = exp.split(' ');
  const datas = [];
  const ops = [];
  const brackets = [];

  const calcPrev = () => {
    const data2 = datas.pop();
    const data1 = datas.pop();
    const op = ops.pop();
    return `${data1} ${data2} ${op}`;
  };

  // 2 * 3 / ( ( 2 - 1 ) + 3 ) * ( 4 - 1 )
  for (let i = 0; i < expArray.length; i += 1) {
    const ele = expArray[i];
    if (ele === '(') {
      brackets.push(ele);
    } else if (ele === '+' || ele === '-') {
      if (brackets.length === 0) {
        if (ops.length > 0) {
          const prev = calcPrev();
          datas.push(prev);
        }
      }
      ops.push(ele);
    } else if (ele === '*' || ele === '/') {
      if (brackets.length === 0) {
        if (ops.length > 0) {
          const prevOp = ops[ops.length - 1];
          if (prevOp === '*' || prevOp === '/') {
            const prev = calcPrev();
            datas.push(prev);
          }
        }
      }
      ops.push(ele);
    } else if (ele === ')') {
      const prev = calcPrev();
      datas.push(prev);
      brackets.pop();
    } else {
      datas.push(ele);
    }
  }
  while (ops.length !== 0) {
    const prev = calcPrev();
    datas.push(prev);
  }
  return datas.pop();
};

module.exports = {
  infixToPostfixStrict,
  infixToPostfix,
};
