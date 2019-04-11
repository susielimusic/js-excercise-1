// Find the maximum // function maxOfTwoNumbers (a,b) { // if (a > b) // return a // if (a < b) // return b // if (a = b) // return a,b // }

// // Finding Longest Word // var words = [ // 'mystery', // 'brother', // 'aviator', // 'crocodile', // 'pearl', // 'orchard', // 'crackpot' // ];

// function longestWord(array){ // var longest = 0; // var word = null; // for (var i=0; i < array.length; i++){ // if(longest < array[i].length){ // longest = array[i].length // word = array[i]; // } // } // return word; // }

// longestWord(words)

// // Calculating a Sum

// var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; // function sum(input) // if (toString.call(input)!=="[6, 12, 1, 18, 13, 16, 2, 1, 8, 10]") // return false // var total=0; // for(var i=0;i<input.length;i++) // {

// // Calculate the Average

// var averageNumbers = [2, 6, 9, 10, 7, 4, 1, 9]; // function calculate(array){ // var sum = 0; // var count = array.length; // for (var i = 0; i< count; i++){ // sum = sum + array[i]; // } // return sum / count // }

// Array of Strings var wordsArr = [ 'seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace' ];

// var averageWordLength = [wordsArr]

function calculate(wordsArr){ var wordsTotalCount = 0; for(i = 0; i < wordsArr.length; i++) { // console.log('wordsArr[i].length', wordsArr[i].length) wordsTotalCount += wordsArr[i].length; console.log('wordsTotalCount', wordsTotalCount) } var averageWordLength = wordsTotalCount/wordsArr.length console.log('averageWordLenght', averageWordLengthh) } calculate(wordsArr)

// Unique Arrays // var wordsUnique = [ // 'crab', // 'poison', // 'contagious', // 'simple', // 'bring', // 'sharp', // 'playground', // 'poison', // 'communion', // 'simple', // 'bring' // ];

function uniquifyArray(array){ var newArr=[]; for (i=0; i<array.length; i++){ if (newArr.indexOf(array[i]) == -1){ newArr.push(arr[i]); return newArr; } } }

// // Finding Elements // var wordsFind = [ // 'machine', // 'subset', // 'trouble', // 'starting', // 'matter', // 'eating', // 'truth', // 'disobedience' // ];

function doesWordExist(array, word){ for (i=0; i<arr.length; 1++){ if(arr[i]===word){ return true; } } return false;

// // Counting Repetion // var wordsCount = [ // 'machine', // 'matter', // 'subset', // 'trouble', // 'starting', // 'matter', // 'eating', // 'matter', // 'truth', // 'disobedience', // 'matter' // ]; // // Bonus Quest

function howManyTimes(arr, word){ var timesAppearing=0; for (i=0; iCarr.length; i++){ if (arr[i]===word){ timesAppearing+=1; } return timesAppearing }


//Q1 var driver = "Kido" console.log (the driver's name is ${driver}) var navigator = prompt("what is the navigator's name?") console.log (navigator)

//Q2 if (driver.length > navigator.length) { console.log('The Driver has the longest name, it has' + driver.length + 'characters') } else if (driver.length < navigator.length) { console.log('The Navigator has the longest name, it has' + navigator.length + 'charcaters') } else { console.log ('wow, you guys have equally long names!! + driver.length + navigator.length') } //loop console.log("Uppercase then Split") var UpSplit = driver.toUpperCase().split("");//make it upperase then Split console.log("Reverse the navigator") console.log(navigator.split("").reverse().join(""));//make it in reverse order

//Q3 //"The driver's name goes first" //"Yo, the navigator goes first definitely" //"What?! You both got the same name?"

var n = driver.localeCmpare(navigator)

if (driver.localeCmpare(navigator)) console.log("-1") else if (navigator.localeCmpare(driver)) console.log("1") else { console.log("0")

//-1 if the reference string is sorted before the compareString //0 if the two strings are equal //1 if the reference string is sorted after the compareString