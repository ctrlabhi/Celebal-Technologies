function first(array, n) {
  if (array == null || array.length === 0) {
    return [];
  }
  if (n == null) {
    return array[0];
  }
  if (n < 0) {
    return [];
  }
  return array.slice(0, n);
}

// Test data
console.log(first([7, 9, 0, -2])); // Expected Output: 7
console.log(first([], 3)); // Expected Output: []
console.log(first([7, 9, 0, -2], 3)); // Expected Output: [7, 9, 0]
console.log(first([7, 9, 0, -2], 6)); // Expected Output: [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // Expected Output: []
