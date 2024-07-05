// 1. Joining elements of an array into a string
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join(','));
console.log(myColor.join('+'));

// 2. Finding the most frequent element in an array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mostFrequent(arr) {
    var frequency = {};
    var maxFreq = 0;
    var mostFreqElement;
    
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        frequency[element] = (frequency[element] || 0) + 1;
        
        if (frequency[element] > maxFreq) {
            maxFreq = frequency[element];
            mostFreqElement = element;
        }
    }
    return mostFreqElement + " ( " + maxFreq + " times )";
}
console.log(mostFrequent(arr1));

// 3. Truncating a string
function truncateString(str, num) {
    return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4));

// 4. Capitalizing words in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) { return char.toUpperCase(); });
}
console.log(capitalizeWords('js string exercises'));

// 5. Getting array elements between two values
function arrBetween(start, end, arr) {
    return arr.filter(function(element) {
        return element > start && element < end;
    });
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// 6. Finding the index of an element in an array
function findIndex(arr, target) {
    return arr.indexOf(target);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
