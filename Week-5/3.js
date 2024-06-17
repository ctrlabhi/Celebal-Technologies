const truncateString = (str, num) => {
  return str.length > num ? str.slice(0, num) : str;
};

console.log(truncateString("Robin Singh", 4)); // OUTPUT: "Robi"
