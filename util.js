// Returns sequence value using following definition:
// f(1) = 1
// f(n+1) = 1 + f(n + 1 - f(f(n)))
// i.e. f(n) = 1 + f(n - f(f(n-1)))
let sequence = [1, 1];
export function getSequenceValue(n) {
  if (!sequence[n]) {
    sequence[n] =
      1 + getSequenceValue(n - getSequenceValue(getSequenceValue(n - 1)));
  }

  return sequence[n];
}
