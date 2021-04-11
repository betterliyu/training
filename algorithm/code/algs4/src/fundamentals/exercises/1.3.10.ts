// 必须带括号
export const infixToPostfixStrict = (exp: string): string => {
  const expArray = exp.split(' ');
  const data = [];
  const ops = [];
  for (let i = 0; i < expArray.length; i += 1) {
    const ele = expArray[i];
    if (ele === '(') {
      // empty
    } else if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
      ops.push(ele);
    } else if (ele === ')') {
      const data2 = data.pop();
      const data1 = data.pop();
      data.push(`${data1} ${data2} ${ops.pop()}`);
    } else {
      data.push(ele);
    }
  }
  return data.pop();
};

// 乘除不用带括号
export const infixToPostfix = (exp: string): string => {
  const expArray = exp.split(' ');
  const data = [];
  const ops = [];
  const brackets = [];

  const calcPrev = () => {
    const data2 = data.pop();
    const data1 = data.pop();
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
          data.push(prev);
        }
      }
      ops.push(ele);
    } else if (ele === '*' || ele === '/') {
      if (brackets.length === 0) {
        if (ops.length > 0) {
          const prevOp = ops[ops.length - 1];
          if (prevOp === '*' || prevOp === '/') {
            const prev = calcPrev();
            data.push(prev);
          }
        }
      }
      ops.push(ele);
    } else if (ele === ')') {
      const prev = calcPrev();
      data.push(prev);
      brackets.pop();
    } else {
      data.push(ele);
    }
  }
  while (ops.length !== 0) {
    const prev = calcPrev();
    data.push(prev);
  }
  return data.pop();
};
