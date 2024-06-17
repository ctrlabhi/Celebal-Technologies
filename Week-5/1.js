const myColor = ["Red", "Green", "White", "Black"];

// Output 1: "Red,Green,White,Black"
const output1 = myColor.join(',');
console.log(output1);

// Output 2: "Red,Green,White,Black"
const output2 = myColor.toString();
console.log(output2);

// Output 3: "Red+Green+White+Black"
const output3 = myColor.join('+');
console.log(output3);
