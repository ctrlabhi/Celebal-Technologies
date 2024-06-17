const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const mostFrequentItem = (arr) => {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequent;

  arr.forEach(item => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequent = item;
    }
  });

  return `${mostFrequent} ( ${maxCount} times )`;
};

console.log(mostFrequentItem(arr1));
