function fibonacciProjection(n) {
  const fibSequence = [1];
  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return {
      sequence: fibSequence,
      projections: [],
    };
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);

    iterationsCounter -= 1;
  }

  // Níveis de projeção de Fibonacci
  const lastFib = fibSequence[fibSequence.length - 1];
  const secondLastFib = fibSequence[fibSequence.length - 2];

  // Cálculo das retrações e extensões de Fibonacci
  const difference = lastFib - secondLastFib;
  const retracements = {
    "23.6%": lastFib - 0.236 * difference,
    "38.2%": lastFib - 0.382 * difference,
    "50%": lastFib - 0.5 * difference,
    "61.8%": lastFib - 0.618 * difference,
    "100%": secondLastFib,
  };

  const extensions = {
    "161.8%": lastFib + 0.618 * difference,
    "261.8%": lastFib + 1.618 * difference,
    "423.6%": lastFib + 2.618 * difference,
  };

  return {
    sequence: fibSequence,
    retracements,
    extensions,
  };
}
const result = fibonacciProjection(10);
console.log("Sequência de Fibonacci:", result.sequence);
console.log("Retracções de Fibonacci:", result.retracements);
console.log("Extensões de Fibonacci:", result.extensions);
