// write a function that takes in a string and reverses it. 
//for example input: "hello world!" output: "!dlrow olleh"
//  METHOD #1 --> Reverse a String With a Decrementing For Loop:
// function reverseString(str) {
//     let newString = ""; // Declared a storage variable newString
//     for (let i = str.length - 1; i >= 0;i--) {
//         newString += str[i];
//     }
//     return newString
// }
// console.log(reverseString("hello world!"));

// METHOD #2 --> Reverse a String With Built-In Functions Chained Together:
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello world!"));

// METHOD #3 --> Reverse a String With Recursion:
// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverseString("hello world!"));

// METHOD #4 --> Conditional (Ternary) Operator:
// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverseString("hello WORLD!"));

  

//write a function that returns "fizz" if a number is divisible by 3, "buzz" if a number is divisible by 5 and "fizzbuzz" if it is divisible by both 3 and 5. 
// for example: input: 15 , output: "fizzbuzz". 
// input: 10, output: "buzz"
// input: 9, output: "fizz"
// **INTERVIEW QUESTION**

// let num = 9;

// function divNum(param) {
//     if (param % 5 === 0 && param % 3 === 0) {
//         return "buzz";
//     }else if (param % 5 === 0){
//         return "fizzbuzz";
           
//     }else if (param % 3 === 0) {
//         return "fizz";
//     }

// }console.log(divNum(num));


// Example
  // Objective is to change all employee emails
  
  //declare an object for nic which includes his name, email, and interests
  var NicWorkInfo = {
    name: 'Nic',
    email: "Nic@lauriecarey.com",
    interests: [ 'Ali', 'Soccer', 'Coding', 'Noah' ],
};
//declare an object for Anam which includes her name, email, and interests
var AnamWorkInfo = {
    name: 'Anam',
    email: "Anam@lauriecarey.com",
    interests: [ 'Flowers', 'Netflix'],
};
//declare an object for Laurie which includes her name, email, and interests
var LaurieWorkInfo = {
    name: 'Laurie',
    email: "Laurie@lauriecarey.com",
    interests: [ 'Work', 'Running', 'Sunshine', 'Family' ],
};

// add the three employees to an array of employees
var employees = [LaurieWorkInfo, AnamWorkInfo, NicWorkInfo];

// loop over all objects included in the employees array
for (var i = 0; i < employees.length; i++) {
    // set a variable to our current object (in this case a specific employee)
    var employee = employees[i];
    
    // find the @ sign in the current employees email address
    // grab the everything before that index 
    var firstCut = employee.email.indexOf('@');
    
    // access the email key-value pair for our current employee
    // change the end of the email by using the variable 'firstCut' index
    employee.email = employee.email.slice(0, firstCut) + '@nebulaacademy.com';
}
// log the updated objects to the browser using the employees array
console.log(employees);


// Given an arry of of first & last names (see below), write a function that returns an array of first names
//         // Example array: ['Patrick Francois', 'Mitsie Paisley', 'George Francais', 'Deboraht Neal']
//             // Resulting output: ['Patrick', 'Mitsie', 'George', 'Deboraht']

//             //Hints: 
//                 // 1: use an array instead of a number for our accumilator
//                 // 2: within the loop use the .push() method to add items into the array 

//   var fullNames = ['Patrick Francois', 'Mitsie Paisley', 'George Francis', 'Deboraht Neal'];
//   function arrNames(FullNamesarr){
//       var FirstNames = [];
//       for (var i = 0; i < FullNamesarr.length; i++){
//            var currentFullName = FullNamesarr[i]
//       var first = currentFullName.split(' ')[0] //-> ['George', 'Francis']
//       FirstNames.push(first)          
        


//      }
//       return FirstNames;

//     }
//    console.log(arrNames(fullNames))


// Level 0:

    // Write out 3 functions which don’t require an argument or parameter. 

        //  function greeting(){

        //   return 'Hello World!';   
        // }    
        //  function gMorning(){

        //    return 'Good Morning World!';
        // }

        //   function gNite(){

        //     return 'Goodnight World!';
        // }
        //    console.log(greeting());
        //    console.log(gMorning());
        //    console.log(gNite());
            

    // Level 1:

    // Write out 3 functions which take in a number and perform a mathematical operation and return the result
        // Add
        var number1 = 20
        var number2 = 40

        function add(){

          return (number1 + number2);
      }
      // Multiply
      
        function multiply(){

          return (number1 * number2);
      }
       //Divide
        function divide(){

          return (number1 / number2);
      }
       console.log(number1 + number2);
       console.log(number1 * number2);
       console.log(number1 / number2);

   
   
    // Write code to convert the following into something for the computer and something for the human;

        var fullText2 = "MAN67584758;Manchester Piccadilly"    // -> Expected Solution: Computer: MAN67584758, Human: Manchester Piccadilly
        var fullText1 = "GNF5767465;Greenfield"                // -> Expected Solution: Computer: GNF5767465, Human: Greenfield
        var fullText3 = "LIV5hg65hd7374;Liverpool Lime Street" // -> Expected Solution: Computer: LIV5hg65hd7374, Human: Liverpool Lime Street
        var fullText4 = "SYB4f;Stalybridge"                    // -> Expected Solution: Computer: SYB4f, Human: Stalybridge
        var fullText5 = "HUD5767ghtyfyr45;Huddersfield"        // -> Expected Solution: Computer: HUD5767ghtyfyr45, Human: Huddersfield

    //Figure out where divider is
        var divider = fullText1.indexOf(';');
    //Slice it on the semicolon to get the first half
        var computerText = fullText1.slice(0, divider);
    //Slice on the semicolon to get the second half
        var humanText = fullText1.slice(divider + 1, fullText1.length);
    //Create a string of everything.
        var finalText = `Text for computer: ${computerText}. Text for human: ${humanText}.`;
    //Show on CLI
         console.log(finalText)


    // Practice 1:
 // Task 1: Creating an object
 // Create an object called car
 // Give it 5 key value pairs including; color, numberOfWheels, and brand. 
 
 // Task 2: Changing Stuff
 // Using dot notation 
 // 2a: Change the color
 
 // Task 3: Adding Stuff
 // Add numberOfSeats
 // Add licensePlate
// End of practice one


//  var carObj = {
//      name: 'bmw',
//      color: 'black',
//      numberOfWheels: 4,
//      interior: [ 'leather', 'burgundy', 'moon roof' ],
//      warranty: '1yr',
     
// };
//  carObj.color = 'white';
//  carObj.seats =  6;
//  carObj.licensePlate = 'dpg4067';
  
//  console.log(carObj);

//I want to loop over the array
        // I want to figure out if a word has a vowel in it
        // If a word has a vowel remove said vowel
        // Do the same thing for capital voewls
        // Add these words into a new array

    // var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // var fruitNoVowels = [];

    // Original solution
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i];
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1){
    //         currentFruit = currentFruit.split('A').join('');
    //         currentFruit = currentFruit.split('a').join('');
    //     }
    //     if (currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1){
    //         currentFruit = currentFruit.split('E').join('');
    //         currentFruit = currentFruit.split('e').join('');
    //     }
    //     if (currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1){
    //         currentFruit = currentFruit.split('I').join('');
    //         currentFruit = currentFruit.split('i').join('');
    //     }
    //     if (currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1){
    //         currentFruit = currentFruit.split('O').join('');
    //         currentFruit = currentFruit.split('o').join('');
    //     }
    //     if (currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
    //         currentFruit = currentFruit.split('U').join('');
    //         currentFruit = currentFruit.split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit)
    // }

    // // Solution 2
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i];
    //     // One if
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
    //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
    //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
    //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
    //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1
    //     ){
    //         currentFruit = currentFruit.split('A').join('');
    //         currentFruit = currentFruit.split('a').join('');
    //         currentFruit = currentFruit.split('E').join('');
    //         currentFruit = currentFruit.split('e').join('');
    //         currentFruit = currentFruit.split('I').join('');
    //         currentFruit = currentFruit.split('i').join('');
    //         currentFruit = currentFruit.split('O').join('');
    //         currentFruit = currentFruit.split('o').join('');
    //         currentFruit = currentFruit.split('U').join('');
    //         currentFruit = currentFruit.split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit)
    // }

    // // Solution 3
    // for(var i = 0; i < fruit.length; i++){
    //     var currentFruit = fruit[i].toLowerCase();
    //     // One if
    //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
    //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
    //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
    //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
    //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
    //         currentFruit = currentFruit.split('A').join('').split('a').join('').split('E').join('').split('e').join('').split('I').join('').split('i').join('').split('O').join('').split('o').join('').split('U').join('').split('u').join('');
    //     }
    //     fruitNoVowels.push(currentFruit);
    // }

    // Final Solution
    // Declare a variable called fruit. Set it equal to an array of strings. 
    var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

    // Declare a variable which will be our edited array. This variable starts as an empty array.
    var fruitNoVowels = [];

    // Iterate over the fruit array. Starting at the first index and going until the last. 
    for(var i = 0; i < fruit.length; i++){
        // create a variable that is equal to the lowercase version of the current fruit
        var currentFruit = fruit[i].toLowerCase();
        // create a variable, which is an array, that holds all of the vowel values
        var vowels = ['a','e','i','o','u'];
        // iterate through the vowel array
        for (var index = 0; index < vowels.length; index++) {
            // create a variable that is equal to the current vowel
            const currentVowel = vowels[index];
            // if our current fruit has a vowel in it execute what's inside the curly brackets
            if(currentFruit.indexOf( currentVowel ) > -1){
                //set current fruit to currentfruit minus the vowels by using the split and join methods.
                currentFruit = currentFruit.split(currentVowel).join('');
            }
        }
        // insert our current fruit into our new array which was declared prior to the loop (fruitNoVowels) 
        fruitNoVowels.push(currentFruit);
    }
    // print our new, filled in, array to the CLI
    console.log("Q4:" , fruitNoVowels);
    
// Q5: Very Hard:
    //Optional 
    // Loop over the following array and log to the CLI each word without any vowels UNLESS the vowel is the first letter of the word
    //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    //      - Output: ['Appl', 'Bnn', 'Orng', 'Pch', 'Strwbrry', 'Plm'];
// var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// var fruitNoVowels = [];

    // Solution
    for(var i = 0; i < fruit.length; i++){
        var currentFruit = fruit[i].toLowerCase();
        var vowels = ['a','e','i','o','u'];
        for (var index = 0; index < vowels.length; index++) {
            const currentVowel = vowels[index];
            // NEXT LINE IS THE DIFFERENCE FOR THE TWO PROBLEMS
            // Start changing vowels after the first letter, 0, not at -1
            // if our current fruit has a vowel after the first letter execute what's inside the curly brackets
            if(currentFruit.indexOf( currentVowel ) > 0){
                currentFruit = currentFruit.split(currentVowel).join('');
            }
        }    
        fruitNoVowels.push(currentFruit);
    }
    console.log(fruitNoVowels);



// What is incramentation
 //   var num = 1
    //   num = num + 1 
    //   num += 1;
    //   num++; // This means add 1
    //  Big Difference is (n +1) vs (n = n + 1)
    // num++;
    // num++;
    // num++;
    // num++;

    // How and why is this variable changing?

    // var str = 'Hello';
    // An example of returning the index value 
    // This is how a loop thinks 
    // str(0) //H
    // str(1) //E
    // str(2) //L
    // str(3) //L
    // str(4) //O
    // str(5) //break 

    // Look uo to the number !00, incfreasing by 1

  //   for(var i = 0; i < 5; i+=1){

 //   console.log(i);
// }

// What is Syntax:
    // Similar to grammer 
    // Lets eat, Grandpa! // This means lets eat with grandpa
    // Lets eat Grandpa!  // This means lets eat grandpa

    
    // var variableName1;// declare variable syntax 
    // var variableName2 = 'Test'; // assign vartiable a value
    // if(condition){
    //     execution;
    //  }; // if statement syntax
    // for (let index = 0; index < array.length; index++) {
    //    'do something here'
    // } // for loop syntax
    // console.log(variableName);


    // level 0
    // Q0.1 create a function that always greets us ( Hello World Function )
        // example:
            // no input
            output: "Hello!"

            function greeting(){
                 
                return 'Hello!';
                
            }
            console.log(greeting());

// // level 1:
//     // Q1.1 
//         // Create a function that takes in a string and returns the second character
             let message = "Hey i'm on my way home";

             function secondChar(str){

                 let secondLetter = str.slice(1, 2);
                 return secondLetter; 
                  
             }
             console.log(secondChar(message));   


//     // Q1.2
//         // Create a function that takes in an array and returns the second element
             let budTypes = ['haze', 'sour', 'gelato', 'lava cake', 'northern lights'];

             function budArr(arr){

                 let secondElement = arr.slice(2,3);
                 return secondElement;
                 //return arr[2];
             }
             console.log(budArr(budTypes));
    
    // Q1.3
        // Create a function that takes in an array of birds and adds three birds
            // the birds get added one to the front, one to the back, and one at the second index

        //    let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
            // let bird1 = 'Quaker';
            // let bird2 = 'Cockatoo';
            // let bird3 = 'Kingfisher';

        //    function addBirds(arrBirds){

        //        arrBirds.unshift('Quaker');
        //        arrBirds.push('Cockatoo');
        //        arrBirdds.splice(2,2,'Kingfisher');
        //        return addBirds;
        //    }
        //    console.log(addBirds(arrBirds));

    // Q1.4
        // Create a function that takes in a string and gives us the first three letters

        //let note = 'What do you wanna do today?';
        //function firstThree(str){

        //   let threeLetters = str.slice(0,3);
        //   return threeLetters;
       //}
       //console.log(firstThree(note));

    // Q1.5
        // Create a function that takes in an array and combines the elements into a string
        //    let arr1 = ['Hey', 'how', 'are', 'you', 'doing?'];
        //    function arrToStr(arr){

        //        let newStr = arr1.join(' ');
        //        return newStr;
        //    }
        //    console.log(arrToStr(arr1));

// level 2:
    // Q2.1
        // Create a function that takes in a string and returns the last character
    //    let message1 = "Hey i'm on my way home";

    //    function lastChar(str){

    //        let lastLetter = str.slice(21, 22);
    //        return lastLetter; 
             
    //    }
    //    console.log(lastChar(message1));   

    // Q2.2
        // Create a function that takes in an array and returns the last element
    //       let musicTypes = ['rap', 'pop', 'gospel', 'country', 'rock', 'jazz']
    //       function musicArr(arr){

    //         let lastElement = arr.slice(5,6);
    //          return lastElement;
    //       }
    //       console.log(musicArr(musicTypes));

// level 3:
    // Q3.1
        // Create a function that takes in a string and returns the central character
    //    let feeling = "I'm so tired and have a headache";
    //    function centralChar(str){

    //       let centerChar = str.slice(12,16);
    //       return centerChar;
    //   }
    //   console.log(centralChar(feeling));

    // Q3.1
        // Create a function that takes in an array and returns the central element
    //       let cars = ['BMW', 'Mercedes', 'Nissan', 'Honda', 'Jaguar'];
    //       function carsArr(arr){

    //          let centerElement = arr.slice(2,3);
    //          return centerElement;
    //       }
     //      console.log(carsArr(cars));


     // LOOPING OVER STRINGS

// Log greet into the console using a loop 5 times

// function greet(){

//     for(var i = 0; i < 5; i++){
//         console.log('hi!')
//     }
// }
// greet();

//  Log each letter into the console using as loop

// let str = "Hello World!"

// function letterLogger(str){
//     for( let i = 0; i < str.length; i++){
//         console.log(str[i]);
//     }
// }
// letterLogger(str);

// Loop through every other letter in String

// let str = "Hello World"

// function otherLetter(str){
//     for( let i = 0; i < str.length; i+=2){
//          console.log(str[i]);
//     }
// }
// otherLetter(str);


// Reverse String Using a for loop
// let str = "Hello World"

// function reverseLetter(str){
//     for( let i = str.length - 1; i >= 0; i--){
//          console.log(str[i]);
//     }
// }
// reverseLetter(str);


// LOOPING OVER ARRAYS

// iterate over array and log current element

// let arrOfName = ['Patrick', 'Debbie', 'Geo', 'Nat'];

// function iterateArr(arrParam){
//     for( let i = 0; i < arrParam.length; i++){
    
//         console.log(arrParam[i]);
//     }
// }
// iterateArr(arrOfName);

//  iterate over an array and log every other item

// var arrColors = ['Red', 'Blue', 'Pink', 'Silver', 'Orange'];

// function everyOtherEle(arrParam){
//     for( let i = 0; i < arrParam.length; i += 2){
//        console.log(arrParam[i]);
//     }
// }
// everyOtherEle(arrColors);

//  log first letter of each element 

// var arrCars = ['BMW', 'Mercedes', 'Nissan', 'Honda', 'Ford'];

// function firstLetterEle(arrParam){
//     for(let i = 0; i < arrParam.length; i++){
//          let currentCar = arrParam[i]; //BMW, then Mercedes etc etc 
//          // Next tweo console.logs do same thing
//         console.log(currentCar.slice(0,1));
//         // console.log(currentCar[0]);

//     }
// }
// firstLetterEle(arrCars)

//  create a function which logs the last letter of every other item starting from the back of the array
//  declare a variable 
//  give your variable a value of an array
//     let bFastFoods = ['eggs', 'bacon', 'potato', 'milk', 'tea']
// create a function 
    // with a name 
    // it takes in one parameter 
//   function lastLetter(param){
        //  iterate over our parameter
           // starting from the back
           // until the front
          // look at every other element
//        for(let i = param.length - 1; i >= 0; i -=2){
            //grab specific element
//            let currentEle = param[i];
          // grab the last letter of the element 
            // next two lines do the same thing
        //  let letter = currentEle.slice(currentEle.length - 1, currentEle.length);
//          let letter = currentEle.slice(-1);
            // log the last letter of the element
//              console.log(letter);


//        }
//    }
//    lastLetter(bFastFoods);
    // LONGHAND:
    // i = i + 1
    // SHORTHAND:
    // i++ // increase i by 1
    // i-- // decrease i by 1
    // i+=1 // increase i by 1
    // i-=1 // decrease i by 1
    // i+=2 // increase i by 2 etc...
    // i-=2 // decrease i by 2 etc...


    // starting from the back
    // until the front
    // look at every other element
        // log the last letter of the element


        // Basic accumilator pattern example:
        // function which iterates over an array and fills a new array with the middle letter of each element

        //define a variable
        // set it equal to an array of strings
        let cartoons = ['Tom-&-Jerry', 'X-Men', 'Gundam-Wing', 'Hey-Arnold', 'Boondoks', 'Happy-Tree-Friends'];

        // define a function
        // give it a parameter 
       function midEleLet(paramArr){
           // declare a new variable
           // set it equal to an empty array
            let allMidLet = [];

           // declare a form loop where:
              // the index starts at 0
              // we end when ther index reaches the param.length
              // it increases by 1
            for(let i = 0; i < paramArr.length; i++){
              
               let currentEle = paramArr[i];// setting a variable equal to our current element based on the current index
               let middleLetterIndex = currentEle.length/2;// declare a variable and dynamically set it equal to the middle letter
               let middleLetter = currentEle.slice(middleLetterIndex, middleLetterIndex+1);

                allMidLet.push(middleLetter);
            }
            return allMidLet;
        }
        console.log(midEleLet(cartoons));

        // Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. 
   //   let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];

   //   function lastLetters(arrParam){
   //     let newArr = [];
   //       for(let i = 0; i < arrParam.length; i++){
   //          let currentEle = arrParam[i];// looking at each element by itself 
   //           newArr.push(currentEle.slice(-1)); 
          
   //       }
   //       console.log(newArr);

   //   }
   //   lastLetters(seasons);
   // output: ['r', 'n', 'g', 'r'];

// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. One element will be an empty string.
// let seasons = ['Winter', 'Autumn', 'Spring', 'Summer', ''];

// function lastLetters(arrParam){
//   let newArr = [];
//     for(let i = 0; i < arrParam.length; i++){
//        let currentEle = arrParam[i];// looking at each element by itself 
//         newArr.push(currentEle.slice(-1)); 
    
//     }
//     console.log(newArr);

// }
// lastLetters(seasons);


//create a function which logs the first letter of each element in an array
  let sports = ['Football', 'Baseball', 'Basketball', 'Golf', 'Curling', 'Soccer', 'Hockey'];

  function firstLetter(arrParam){
      let newArr = [];
      for(let i = 0; i < arrParam.length; i++){
          let currentSport = arrParam[i];
          newArr.push(currentSport.slice(0,1));
        

      }
      console.log(newArr);
  }
  firstLetter(sports);


  // Conditionals

// level 0
    // Q0.1
        // Create a function which takes in a string. 
        // If the string length is greater than 0 return 'The string exists'. 
        // Else return, 'The string doesn't have characters'.
        // function strLength(param){
        //     if (param.length > 0){
        //         return 'The string exists';

        //     } else {
        //         return "The string doesn't have characters"; 
        //     }
        // }
        // console.log(strLength('Hello World'));
        // console.log(strLength(''));

// level 1
    // Q 1.1  
        // Create a function which takes in two numbers 
        // If number one is larger than number two return 'Number one is greater than number two.'
        // If number two is larger than number one return 'Number two is greater than number one.'
        // function twoNumbers(num1,num2){
        //     if (num1 > num2){
        //         return 'Number one is greater than number two';

        //     } else {
        //         return 'Number two is greater than number one';
        //     }
        // }
        // console.log(twoNumbers(50, 49));
        // console.log(twoNumbers(-1, 9));
        // console.log(twoNumbers(398, -398))
        

// level 2
    // Q 2.1
        // Create a function which takes the following array: [99, 'Long Island', 'Hello World']; 
        // If the array contains the string 'Hello World' the function returns 'Hello World!'.
        // If 'Hello World doesn't exist return 'Goodnight World'.  
            // Once you think you have the solution also try and invoke the function with a different array: ['red', 'green', 'periwinkle']; 
        // let arr = [99, 'Long Island', 'Hello World'];
        // let arr2 = ['red', 'green', 'periwinkle']; 

        // function hello(param){
        //     if (param.indexOf('Hello World') > -1 ){
        //         return 'Hello World';
        //     } else {
        //         return 'Goodnight World';
        //     }
        // }
        // console.log(hello(arr));
        // console.log(hello(arr2));

    // Q 2.2
        // Create a function which takes in a car object.
        // If the object contains a key of carName with a value of 'Ferrari'
        // and the object contains a key of color with a value of 'Red'.
        // return 'Whoa, a classic Ferrari!'.
        // else return 'Meh, it's just a car'.
        //  let car = {
        //      carName: 'Ferrari',
        //      cost: 300000,
        //      color: 'Red',
        //      transmission: 'automatic',
        //      countryOfOrigin: 'Italy', 
        //  }
        //  function carObj(param){
        //      if (param.carName === 'Ferrari' && param.color === 'Red'){
        //          return 'Whoa, a classic Ferrari';
        //      }else {
        //          return "Meh, it's just a car";
        //      }
        //  }
        //  console.log(carObj(car));
// level 3
    // Q 3.1
        // Create a function which takes in a car object.
        // If the object contains a key of carName with a value of 'Lamborghini'
        // and the object contains a key of color with a value of 'yellow'.
        // return 'Whoa, a classic Lamborghini!'.
        // If the carName is 'Lamborghini' and the color isn't 'yellow' then return, 'That's an interesting Lamborghini.'
        // else return 'Meh, it's just a car'.

        let car2 ={
            carName: 'Lamborghini',
            cost: 400000,
            color: 'Blue',
            transmission: 'automatic',
            countryOfOrigin: 'Italy', 
        }
        function lamborghiniObj(param){
            if (param.carName === 'Lamborghini' && param.color === 'Yellow'){
                return 'Whoa, a classic Lamborghini!';
                
            } else if (param.carName === 'Lamborghini' && param.color !== 'Yellow'){
                return "That's an interesting Lamborghini";
            } else {
                return "Meh, it's just a car";
            }
        }
        console.log(lamborghiniObj(car2));


        // level 0
    // Q 0.1
        // If a variable has a length greater than 3 return "lenght greater than 3"
        //  function GreaterThan(param) {

        //      if (param.length > 3) {
        //          return "Length Greater Than 3";

        //      } else {
        //          return "Less than 3";
        //      }
        //  }
        //  console.log(GreaterThan("Hello World"));

// level 1
    // Q 1.1
        // Comparing two arrays, return the longest of the two.
        //  let word1 = ['Hello', 'World', 'Hi', 'Bye', 'Why'];
        //  let word2 = ['Hello', 'World', 'Hi', 'Bye', 'Why', 'Tie'];

        //  function compare(arr1, arr2) {

        //      if (arr1.length > arr2.length) {
        //          return arr1;

        //      } else {
        //          return arr2;
        //      }
        //  } 
        //  console.log(compare(word1, word2));

// // level 2
//     // Q2.1
//         // In an array of strings, check for the letter j
//             // return an array of strings that all contain the letter j
            //  let names = ['Jason', 'Mike', 'John', 'Will', 'Nat', 'Jojo', 'Jorge'];

            //  function jStrings(arr) {
            //      let namesWithJ = [];

            //      for (let i = 0; i < arr.length; i++) {
            //          if (arr[i].indexOf('J') > -1) {
            //            namesWithJ.push(arr[i]);
                             
            //         }
            //     }

            //     return namesWithJ;
            // }     
            // console.log(jStrings(names));
    // Or:
//     let names = ['Jason', 'Mike', 'John', 'Will', 'Nat', 'Jojo', 'Jorge'];

//     function jStrings(arr) {
//         let namesWithJ = [];

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].indexOf('J') > -1 || arr[i].indexOf('j') > -1 ) {
//               namesWithJ.push(arr[i]);
                    
//            }
//        }

//        return namesWithJ;
//    }     
//    console.log(jStrings(names));
   // OR:
//    let names = ['Jason', 'Mike', 'John', 'Will', 'Nat', 'Jojo', 'Jorge'];

//     function jStrings(arr) {
//         let namesWithJ = [];

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].toUpperCase().indexOf('J') > -1) {
//               namesWithJ.push(arr[i]);
                    
//            }
//        }

//        return namesWithJ;
//    }     
//    console.log(jStrings(names));


// level 3:
    // Q3.1
        // Check an array of strings for the longest string 
        let pets = ['dog', 'cat', 'tiger', 'mountain lion', 'bear', 'lion', 'monkey'];

    function longest(arr) {
        let longEle  = '';

        for (let i = 0; i < arr.length; i++) {
           let element = arr[i];

           if (element.length > longEle.length) {

            longEle = element;
           }
           
                    
           }
           return longEle;
       }
       console.log(longest(pets));


       // loops or conditionals (level 0-2: focus on picking ONE or the other)

// level 0
// loop warmup
    // create a function which iterates over an array of strings 
    // the function returns a new array of captalized strings
    let newArr = ["new", "array", "strings"]
 
    function capitalize(arr){
    let capitalized = []; 
    for(let i = 0; i < arr.length; i++){
    capitalized.push(arr[i].toUpperCase()); 
    }
    return capitalized; 
    }
    
    console.log(capitalize(["hello", "world"])); 
    console.log(capitalize(["a","b","c","d"])); 
    console.log(capitalize(newArr));
   
   // conditional warmup
       // create a function which takes in a number 
       // the function returns 'even' if the number is even and 'odd' if its odd
   
       function oddOrEven(num){
           if(num % 2 === 0){
           return 'even'; 
           }else{
           return 'odd'; 
           }
           }
           console.log(oddOrEven(12)); 
           console.log(oddOrEven(1)); 
           console.log(oddOrEven(3));
   // level 1
       // Q1:
           // create a function which takes in a string 
           // the function returns even if the string has an even amount of elements
           // otherwise it returns odd
           // let str1 = "Its a Beautiful day in the neighborhood";
   
           // function evenOddStr(param) {
           //    if (param.length % 2 === 0) {
           //             return "even";
   
           //         } else (param.length % 2 !== 1) 
           //             return "odd";
                   
   
           // }
           // console.log(evenOddStr(str1));
       // Q2: 
           // create a function which takes in an array
           // the function returns a new array with every other element in the array
           // let foods = ["pizza", "hamburger", "hot dog", "taco", "soup"];
   
           // function everyOtherEle(arr) {
           //     let newArr= [];
   
           //     for(let i = 0; i < arr.length; i++) {
           //         newArr.slice(0,1);
   
                   
                   
           //     }
           //     return newArr;
               
           // }
           // console.log(everyOtherEle(foods));
   
       // Q3:
           // create a function which takes in an array 
           // the function returns the first element with the character 'i'
           let names = ["hey", "now", "sink", "wow", "pink"];
   
           function firstEle(arr) {
               let iElement = [];
   
               for(let i = 0; i < arr.length; i++) {
                   let element = arr[i];
   
                   if(element.indexOf("i") > -1) {
                       iElement.push(element);
                   }
   
               }
               return iElement[0];
           }
           console.log(firstEle(names));
   
   // level 2:
       // Q1:
           // create a function which takes in two numbers
           // it returns 'That was divisible!' if the first number is divisble by the second
           // function twoNums(num1, num2) {
   
           //     if(num1 / num2){
           //         return 'That was divisible'
           //     }
           // }
           // console.log(twoNums(34,79));
   
   
       // Q2:
           // create a function which takes in an array and a string
           // it returns the index if the string exists within the array
           // it returns 'not here' if the array doesn't contain the string
           let arrOfStr = ['Blue', 'Yellow', 'Pink'];
    
           function doesExist(arrParam, strParam){
               if( arrParam.indexOf(strParam) > -1 ){
                   return arrParam.indexOf(strParam);
           } else {
               return 'not here';
           }
    }
    
    console.log(doesExist(arrOfStr, 'Pink')); // 2
    console.log(doesExist(arrOfStr, 'Blue')); // 0
    console.log(doesExist(arrOfStr, 'White'));// 'not here'

    // level 0
    // Q0.1
        // Create a function which takes in a number. 
        let number = 10;
        let number2 = 0;
        function numArray(param){
       // // If the number is greater than 0 return 'Bigger than zero'. 
            if( param > 0){
                return 'Bigger than zero';
             } else {
                 return 'smaller than or equal to zero';
             }
               
            } 
            console.log(numArray(number));
            console.log(numArray(number2));
       // Else return, 'smaller than or equal to zero'.

// level 1
   // Q 1.1    
       // Create a function which takes any data. 
       // The function returns 'true' if the given parameter is a truthy.
       // If it is falsy, return 'false'. 
       // (This function can be invoked with almost anything. Start by trying strings and empty strings. Don't invoke with something undeclared.)
           // Input: '',           output: 'false'
           // Input: 'a',          output: 'true'
           // Input: undefined,    output: 'false'

            let str1 = '';
            let str2 = 'a';
            let str3 = undefined;

            function truthyFalsy(param){
                if (param){
                    return true;
   
                } else {
                    return false;
                }
            }
            console.log(truthyFalsy(str1));
            console.log(truthyFalsy(str2));
            console.log(truthyFalsy(str3));


// level 2
   // Q 2.1
       // Create a function which returns 'big' if the given number is greater than or equal to 10.
       // If it is smaller, return 'small'. 
        let str4 = 11;
        let str5 = 4;

        function bigNum(param){
            if (param >= 10){
                return 'big';

            } else {
                return 'Small';
               
            }

        }
        console.log(bigNum(str4));
        console.log(bigNum(str5));

   // Q 2.1
       // Create a function which returns 'No such value' if an object doesn't have a value.
       // If it does, return that value. 
           let dirtBike1 = {
             brand: 'Yamaha',
             stroke: 2,
             brakes: ['foot', 'hand'],
             gas: 'unleaded',
             
           }
           let dirtBike2 = {
               brand: 'Honda',
               stroke: 2,
               brakes: ['foot', 'hand'],
               gas: 'unleaded',
               cylinder: 'single',
           }
           let dirtBike3 = {
               brand: 'Kawasaki',
               stroke: 2,
               brakes: ['foot', 'hand'],
               gas: 'unleaded',
           }
           function checkCylinder(param){
               if (param.cylinder === undefined){
                   return 'No such value';
               
               } else {
                  return param.cylinder; 
               }
           }
           console.log(checkCylinder(dirtBike1));
           console.log(checkCylinder(dirtBike2));
           console.log(checkCylinder(dirtBike3));
               
           
   // level 3
   // Q 3.1
       // Create a function which takes in two numbers and compares them. 
       // If the first number is bigger return the first number.
       // If the second number is bigger return the second number.
       function numCompare(num1,num2){
           if (num1 > num2){
               return num1;
               
           }else if (num1 < num2) {
               return num2;
           } else {
               return 'the numbers are equal';
           }
       }
       console.log(numCompare(12,93));


       // create a function that adds two numbers together

    // Solution 1:
        // console.logging inside the function
        // function addNumbers(x, y){
        //     console.log(x + y);
        // }

        // addNumbers(3, 4);
    
    // Solution 2:

        // function addNumbers(x, y){
        //     return (x + y);
        // }

        // console.log(addNumbers(3,4));

// create a function which takes in 3 numbers and returns the product of all three
    // Solution 1:
        // function products(num1, num2, num3){
        //     var solution = num1 * num2 * num3;
        //     return solution;
        // }

        // console.log(products(2, 3, 4))

// create a function that takes in an array of names and says hello to each
    // Solution 1:
        // var people1 = ['Nat', 'Geo', 'Solomon', 'Patrick' ];
        // var people2 = ['Debbie', 'Mitsie', 'Kaya', 'Desmond' ];
        // var people3 = ['Ronald', 'Spencer' ]

        // function sayHello(arr){
            
        //     for(var i = 0; i < arr.length; i++){
        //         var person = arr[i];
        //         console.log("Hello " + person + "!");
        //     }
            
        // }

        // sayHello(people1);
        // sayHello(people2);
        // sayHello(people3);

    // CodeWars 5.11.20
        // Even or Odd       
        // solution 1

            // function even_or_odd(number) {
            //     if( number % 2 === 0 || number % 2 === -0 ){
            //         return 'Even';
            //     } else if( number % 2 === 1 || number % 2 === -1 ){
            //         return 'Odd';
            //     }
            //     return number;
            // }

        // solution 2
        //     function even_or_odd(number) {
        //         if( number % 2 == 0 ){
        //             return 'Even';
        //         } else {
        //             return 'Odd';
        //         }
        //     }


        // console.log(even_or_odd(-3));
        // console.log(even_or_odd(4));
        // console.log(even_or_odd(5));
        // console.log(even_or_odd(6));
        // console.log(even_or_odd(7));
//remove first and last char

//   function removeChar(str){
//     var strLength = str.length;
//     return str.slice(1,strLength-1);
// };
           
// console.log(removeChar('eloquent'));
// console.log(removeChar('country'));
// console.log(removeChar('person'));
// console.log(removeChar('place'));


// function opposite(n){
//     if (n > 0 ){
//     return -n
//     } else{
//     return n
//     }
    
//   };

//   console.log(opposite(1));


//  function boolToWord( bool ){
//      if ( bool === true) {
//        return 'Yes'
//      } else {
//         return 'No'
//      }
//    }
//    console.log(boolToWord(true));
//    console.log(boolToWord(false));


// Example:
    // Write some code that will split up a string into a clear string names. 
    // For example 'Kaya,Solomon' gets converted into 'Kaya, Solomon'.
    // For example 'Nic,Laurie' gets converted into 'Nic, Laurie'.
    // Solution: console.log('Kaya,Solomon'.split(',').join(', '));

//Strings:
    //Q1: 
        // Write some code that gives us the length of a given string.
        // For example 'Peter Parker' gives us 12.
        // For example 'Michelle Obama' gives us 14.
        // var str = 'Peter Parker';
        // var n = str.length;
        // console.log(n);       

    //Q2: 
        // a: Write some code that converts a string into all capitals
        //      For example: 'Peter Parker' changes to 'PETER PARKER'.
        // b: Write some code that converts a string into all lowercase.
        //      For example: 'Michelle Obama' converts 'michelle obama'.
        // var str = 'Peter Parker';
        // var caps = str.toUpperCase();
        // // console.log(caps);
        // var lower = str.toLowerCase();
        // // console.log(lower);

    //Q3: 
        // a: Write some code that extrapolates the second word from the string: "My home town.".
        //      The result should be: 'home'
        // b: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
        //      The result should be: 'eat'
        // var miPueblo = "Longer worlds town.";
        // var casa = miPueblo.indexOf('t');
        // var soloCasa = miPueblo.slice(3, casa);
        // console.log(soloCasa);

        // var str = "Longer worlds town";
        // var strArr = str.split(' ')[1];
        // console.log(strArr);

    //Q4: 
        // Write some code that capitalizes a portion of a given string.
        // For example: "I'm very happy!" becomes, "I'm VERY happy!".

        // var allegre = "I'm very happy";
        // var jo = allegre.replace('happy', 'HAPPY');
        // // console.log(jo);

        // var str = "I'm very happy";
        // var arr = str.split(' ');
        // var capitalized = arr[1].toUpperCase();
        // arr[1] = capitalized;
        // console.log(arr.join(' '));
        

        
        

//Arrays:
        //Q1: Write some code that retrieves the 3rd item from the array ['Red', 'Green', 'Yellow', 'Purple']
        // var fruits = ['Red', 'Green', 'Yellow', 'Purple'];
        // var banana = fruits[2];
        // console.log(banana);
        
        //Q2: Write some code that converts the array ['Red', 'Green', 'Yellow', 'Purple'] to ['Green', 'Yellow', 'Blue', 'Purple', 'Pink']
        // Remove first item from array
        // Add item to middle of array
        // var items = ['one', 'two', 'three', 'four'];
        // items.splice(2, 0, 'hello');
        // console.log(items);

        // var fruits = ['Red', 'Green', 'Yellow', 'Purple'];
        // var newFruits = fruits.slice(1,4);
        // console.log(newFruits);
        
        
        // Add item to end of array

        // var fruits = ['Red', 'Green', 'Yellow', 'Purple'];

        // fruits.unshift('Green');
        // fruits.splice(1, 4, 'Yellow', 'Blue');
        // fruits.push('Purple', 'Pink');
        // console.log(fruits);

        // var arr = ['Red', 'Green', 'Yellow', 'Purple'];

        // arr.shift();
        // //these next two steps can be in either order
        // arr.splice(2, 0, 'Blue');
        // arr.push('Pink')
        // console.log(arr);

        
//  Basic Accumilator Pattern 
 
//  declare a function, that takes in a number, giving it a name, and value
//     function loopcounter(n){
// //declare a variable so we can hold the total value
//      var totalValue = 0;
//     //  declare a for loop
//     for(var i = 0; i < n; i++){
//         // add one to the total value;
//         totalValue = totalValue + 1;

//     }  
//     // return the total value
//     return totalValue;

//     }
//     console.log(loopCounter(1000));


    // Example 2;
    //  Create a function that takes in a array and counts every item in the array

    var fruits = ['apple', 'banana', 'orange', 'pineapple', 'kiwi'];
    var newFruits = ['lime', 'peach']
    //  declare a function that takes in a any array
   function arrayFruits(foods){
    // declare a variable called totalFruits
    var totalFruits = 0;
    // declare a for loop -> starting at the index of 0 index go the length of the entire array and increase by 1
   for(var i = 0; i < foods.length; i++){
    //    add one to the total count
        totalFruits = totalFruits + 1;

  }
//   return totalFruits
    return totalFruits;

   }
//    Invoke fruit counter 'FUNCTION' arrayFruits with our fruits array 'VARRIABLE NAME' fruits, and log it to the console
   console.log(arrayFruits(fruits)); 
//    Invoke New varriable   
   console.log(arrayFruits(newFruits));


   // Q1:
// var fruit = 'Banana';

// Remove the first a from 'Banana'
// console.log(fruit.replace('a',''))

// Remove all 'a's from Banana using a loop (immutability makes this slightly more difficult)
// //Solution 1:
// var finalStr = '';
// for (var i = 0; i < fruit.length; i++) {
//     var letter = fruit[i];  
//     //if the letter is a 
//     if(letter.indexOf('a') === -1){
//         //remove the letter
//         console.log(letter);
//         finalStr = finalStr + letter
//     };
// };
// console.log(finalStr);


// //Solution 2:
// var finalStr = '';
// for (let i = 0; i < fruit.length; i++) {
//     //if the letter is a 
//     if(fruit[i] !== 'a'){
//         //remove the letter
//         console.log(letter);
//         finalStr = finalStr + letter;
//     };
// }
// console.log(finalStr);

// Protect a phone number
//         // input: 555-444-1234
//         // output: 5##-###-##34

//         var fullNum = '555-444-1234';
//         var numArr = fullNum.split('');
//         numArr[1] = '#';
//         numArr[2] = '#';
//         numArr[4] = '#';
//         numArr[5] = '#';
//         numArr[6] = '#';
//         numArr[8] = '#';
//         numArr[9] = '#';
//         console.log(numArr.join(''));

// write a function that checks how often an element appears in an array
    // example
        // check for 'red'
        // input:['black']; output: 0;
        // input:['red', 'blue', 'red', 'yellow', 'red']; output: 3;
        // input:['red', 'blue', 'red', 'yellow', 'black']; output: 2;

        let colors1 = ['red', 'blue', 'red', 'yellow', 'red'];
        let colors2 = ['red', 'blue', 'red', 'yellow', 'black'];
            
        function redCounter(arr){
            let count = 0;
        
            for(let i = 0; i < arr.length; i++){
                let element = arr[i];
                // check if our current element is 'red'
                if( element === 'red' ){
                    count = count + 1; // count += 1 // count++;
                }
            }
            
            return count;
        }
        
        console.log(redCounter(colors1));
        console.log(redCounter(colors2));
        
        
        // Write a function that takes in two parameters and checks how 
        // often the second parameter appears in an array (the first parameter)
        
        let arr1 = ['January', 'May', 'March', 'August']
        let arr2 = ['January', 'March', 'January']
        
        function paramCheck(months, month){
            let count = 0;
            for(let i = 0; i < months.length; i++){
                let element = months[i];
                if (element === month){
                    count = count +1
                }
            }
            return count;
        }
        console.log(paramCheck(arr1,'May'));
        console.log(paramCheck(arr2,'January'));

        // Convert a Number to a String!
function numberToString(num) {
    return num.toString(); // Return a string of the number here!
   }
 console.log(numberToString(25));

 // Convert a string to a Number!
let stringToNumber = function(str){
    return parseInt(str);// The parseInt() function parses a string and returns an integer.
    
  }
  console.log(stringToNumber("1234"));
  console.log(stringToNumber("605"));
  console.log(stringToNumber("1405"));
  console.log(stringToNumber("-7"));

//   even or odd  // 
  function evenOrOdd(number) {
    if ( number % 2 === 0) {
        return "Even";
    }else {
        return "Odd";
    }
  }
  console.log(evenOrOdd(2));
  console.log(evenOrOdd(0));
  console.log(evenOrOdd(7));
  console.log(evenOrOdd(1));

//   Convert Number to Reversed Array of Strings  //
  function digitize(n) {
    let initialArray = (""+n).split('');
    let reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    return reversedArray;
  }
  
  console.log(digitize(348597));

  // Practice 1:
    // Task 1: Creating an object
        // Create an object called car
            // Give it 5 key value pairs including; color, numberOfWheels, and brand.

        // Task 2: Changing Stuff
        // Using dot notation 
            // 2a: Change the color

    // Task 3: Adding Stuff
        // Add numberOfSeats
        // Add licensePlate

            // let car ={
            //     brand: "Lamborghini",
            //     color: "White Smoke",
            //     numberOfWheels: 4,
            //     seats: "Leather",
            //     body: "Carbon Fiber",

            // }
            // car.color = "Silver Pearl";
            // car.seats = 3;
            // car.licensePlate = "GeosLam"
            // console.log(car);

    
//Practice 2

    // Task 1:
        // Create 3 car objects with 3 properties; color, numberOfWheels, and brand. 
    // Task 2:
        // Iterate through the cars and do the following tasks
            // Change the color
            // Add numberOfSeats
            // Add licensePlate
        // (Difficult) Make each one unique

        // let car0 = {
        //     color: "White",
        //     brand: "BMW",
        //     numberOfWheels: 4,
        // }
        // let car1 = {
        //     color: "Black",
        //     brand: "Honda",
        //     numberOfWheels: 4,
        // }
        // let car2 = {
        //     color: "Blue",
        //     brand: "Cadillac",
        //     numberOfWheels: 4,
        // }
        // let cars = [car0, car1, car2];
        // for (let i = 0; i < cars.length; i++) {
        //     cars[i];
        // }
        // car0.color = "Red", car1.color = "Yellow", car2.color = "Pearl";
        // car0.seats = 4, car1.seats = 4, car2.seats = 4;
        // car0.licensePlate = "BackOff", car1.licensePlate = "LookUpp", car2.licensePlate = "SmknDrk"
        // console.log(cars);
        
        

//______________________________________________________________________________________________________________

// Object Loop practice
// level 0:
    // create an object (minimum 3 key-value pairs) & create a function which iterates over the object and logs all values to the console.
    //  let phone = {
    //      brand: "apple",
    //      model: "iphone",
    //      touchScreen: true,
    //  }
    //     function cell() {
    //        for (let item in phone) {
    //             console.log(phone[item]);
    //        }
           
    //     }
    //     cell(phone);
    


// level 1: 
    // create an object (minimum 3 key-value pairs) & create a function which iterates over the object and logs all the key & the value pairs to the console.

    //  let phone1 = {
    //      brand: "Samsung",
    //      model: "Galaxy",
    //      touchScreen: true,
    //  }
    //  function obj(param){
    //      for (let item in param){
    //          console.log(param[item]);
    //      }
    //  }
    //  obj(phone1);
          
     
            
     
     
     
    
    
// level 2: 
    // create an object & create a function which logs all string key-value pairs to the console 
    // let phone2 = {
    //     brand: "Samsung",
    //     model: "Galaxy",
    //     touchScreen: true,
    //     apps: ["maps", "Weather", "Instagram", "Facebook", "Calender"]
    // }
    // function string(param) {
    //     for (let item in param){
    //         if(typeof param[item] === 'string'){
    //           console.log(param[item]);
    //         }
          
    //     }
    // }
    // string(phone2);
    // create an object & create a function which logs all boolean key-value pairs to the console 
    // let phone4 = {
    //     brand: "Samsung",
    //     model: "Galaxy",
    //     touchScreen: true,
    //     apps: ["maps", "Weather", "Instagram", "Facebook", "Calender"]
    // }
    // function arr(param) {
    //     for (let item in phone4){
    //         if(param[item] === true || param[item] === false){
    //             console.log(item, param[item]);
    //         }
           
    //     }
    // }
    // arr(phone4)

    // create an object & create a function which logs all array key-value pairs to the console 
    // let phone3 = {
    //     brand: "Samsung",
    //     model: "Galaxy",
    //     touchScreen: true,
    //     apps: ["maps", "Weather", "Instagram", "Facebook", "Calender"]
    // }
    // function arr(param) {
    //     for (let item in phone3 ){
    //         if(Array.isArray(param[item])){
    //             console.log(item, param[item]);
    //         }
           
    //     }
    // }
    // arr(phone3)
      

//  level 3: 
    // given the following object create a function which logs the username & password length.
    //   let account = {
    //       username: "Snowman",
    //       password: "caRR0t"
    //   }
    //   function namePass(param){
        
    //     for (let item in account){
            
    //         console.log(item, param[item].length);
    //     }
    // }
    // namePass(account);      
          
      
      

// given the following object create a function which logs the house address & passcode as stars.
    // input: ring. Output: "Address: 1600 Pennsylvania Ave NW, Washington, DC 20500. Passcode: ****.""
    //  let ring = {
    //      homeAddress: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    //      passCode: "2020"
    //  }
    //  function addressPass(param) {
    //      let address = param['homeAddress']
    //      let stars = '';

    //      for (let i = 0; i < param['passCode'].length; i++){
    //          stars += '*'
    //      }
    //      return address + '. passCode: ' + stars;
    //  }
    //  console.log(addressPass(ring));
// level 4: 
// create an object & create a function which increases the factor of any number by 10 (even if it is a string, or is concatinated with strings)





// Eloquent JavaScript Chap: 4. Data Structures: Objects and Arrays.. Ex: 4.1 The sum of a range //

function range (start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}
    function sum(array) {
        let total = 0;
        for (let value of array) {
            total += value;
        }
        return total; 
    }
    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55

    // Reversing an Array using two functions //

    function reverseArray(array) {
        let output = [];
        for (let i = array.length - 1; i >= 0; i--) {
            output.push(array[i]);
        }
        return output;
    }

    function reverseArrayInPlace(array) {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            let old = array[i];
            array[i] = array[array.length -1 - i];
            array[array.length - 1 - i] = old;
        }
        return array;
    }
    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]

    //  A list using Conditional Statements and For Loop //
    function arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
          list = {value: array[i], rest: list};
        }
        return list;
      }
      
      function listToArray(list) {
        let array = [];
        for (let node = list; node; node = node.rest) {
          array.push(node.value);
        }
        return array;
      }
      
      function prepend(value, list) {
        return {value, rest: list};
      }
      
      function nth(list, n) {
        if (!list) return undefined;
        else if (n == 0) return list.value;
        else return nth(list.rest, n - 1);
      }
      
      console.log(arrayToList([10, 20]));
      // → {value: 10, rest: {value: 20, rest: null}}
      console.log(listToArray(arrayToList([10, 20, 30])));
      // → [10, 20, 30]
      console.log(prepend(10, prepend(20, null)));
      // → {value: 10, rest: {value: 20, rest: null}}
      console.log(nth(arrayToList([10, 20, 30]), 1));
      // → 20

//  Deep Comparison using Conditionals and For in Loop  //
      function deepEqual(a, b) {
        if (a === b) return true;
        
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object") return false;
      
        let keysA = Object.keys(a), keysB = Object.keys(b);
      
        if (keysA.length != keysB.length) return false;
      
        for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
      
        return true;
      }
      
      let obj = {here: {is: "an"}, object: 2};
      console.log(deepEqual(obj, obj));
      // → true
      console.log(deepEqual(obj, {here: 1, object: 2}));
      // → false
      console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
      // → true


      // given an array filter it to return all words that are 4 characters
      let arr = ['tree', 'no', 'past', 'hungry'];
      let only4Letters = arr.filter( ele => ele.length === 4);
      // console.log(only4Letters);
  // given an array filter it to return only the objects or arrays
      let arr1 = [true, false, undefined, null, [1, 2, 3, 4], {name: 'car', wheels:'4'}];
      let newArr = arr1.filter(ele => typeof ele === 'object');
      // console.log(newArr);
  // given an array filter it to return words that only contain one of the following letters a, e, i, o, or u
      let arr2 = ['hey', 'how', 'are', 'you', 'a', 'by', 1, undefined, null, true]; 
      let newArr2 = arr2.filter(ele => 
          (typeof ele !== 'number' &&
          typeof ele !== 'object' && 
          typeof ele !== 'undefined' &&
          typeof ele !== 'boolean')
          && (ele.indexOf('a') > -1 ||
          ele.indexOf('e') > -1 ||
          ele.indexOf('i') > -1 ||
          ele.indexOf('o') > -1 ||
          ele.indexOf('u') > -1)
      );

      // console.log(newArr2);

  // Given the array on the following line. Filter all guests for only the ones over 21. 
  // Method 1
  let guests = [
      {name: 'Vernon', age: 40},
      {name: 'Petunia', age: 44},
      {name: 'Harry', age: 11},
      {name: 'Dudley', age: 12}
  ];

  let over21 = guests.filter(ele => ele.age >= 21);
  console.log(over21);


  // Method 2
  let guests2 = [
      {name: 'Vernon', age: 40},
      {name: 'Petunia', age: 44},
      {name: 'Harry', age: 11},
      {name: 'Dudley', age: 12}
  ];

  let over21Lists = guests2.filter(obj => {
           return obj.age >= 21
       });

       console.log(over21Lists);


       // Method 3
       let guests3 = [
          {name: 'Vernon', age: 40},
          {name: 'Petunia', age: 44},
          {name: 'Harry', age: 11},
          {name: 'Dudley', age: 12}
      ];

      let over21Lists2 = guests3.filter(element => { return element.age >= 21});
               
           console.log(over21Lists2);


  // Reduce: Use reduce for the following questions
// level 0:
    // Given an array of numbers, add all of them together
    let nums = [20, 40, 60, 80, -65];
    let addNums = nums.reduce((num, total) => num + total );
    // console.log(addNums);
// level 1: 
    // Given an array of numbers, subtract them all from 100
    let nums2 = [12, 23, 33, 44, 55, 66];
    let sub100 = nums2.reduce((num, total) => num + total, -100);
    // console.log(sub100);
// level 2:
    // Given an array of numbers, add all the even ones
    let nums3 = [1,2,3,4,5,6,7,8];
    // let addEven = nums3.filter(num => (num % 2 === 0)).reduce((n, total) => n + total);
    let addEven = nums3.reduce((total, n) => { 
        if(n % 2 === 0){ 
            return total + n;
        } else {
            return total;
        }
    }, 0);
    // console.log(addEven);
// level 3:
    // Given an array of strings, reduce all elements to one string
    let strArr = ["Hello", "my", "name"];
    let oneString = strArr.reduce((ele, string) => ele + ' ' + string);
    // console.log(oneString);
// level 4:
    // Given an array of test scores(numbers) use reduce to get the average score 
    let scores = [88, 55, 98, 44, 77, 60, 70];
    let totalScore = scores.reduce((num, total) => total + num)/scores.length
    // console.log(totalScore);
// level 5: 
    // Given an array of arrays all only containing strings (given below), reduce all elements to one string
    let arrOfArrOfStr = [[['Peter','Piper']],['Picked','A'],[[[['Pickled', 'Pepper']]]]]
    // let eleString = arrOfArrOfStr.reduce((finalArr, ele) => finalArr.concat(ele))
    let count = 0
    let flatArr = (param) => {
        count++;
        console.log(count)
        for (let i = 0; i < param.length; i++) {
            let ele = param[i];

            if ( Array.isArray(ele) ){ 
                param = param.reduce((finalArr, ele) => finalArr.concat(ele));

                return flatArr(param);
            }
        }
        
        param = param.reduce((finalArr, ele) => finalArr.concat(ele));
        return param;
    }

    // console.log(flatArr(arrOfArrOfStr));

    // Filter: Use filter for the following questions
// level 0:
    // Given an array of strings remove any that are longer than 4 letters
    let four = ['smoke', 'drink', 'chill', 'drink', 'kill', 'bill'];
    let removeFour = four.filter(ele => ele.length <= 4)
    // console.log(removeFour);
// level 1: 
    // Given an array of numbers, remove any that are even
    let nums4 = [1,2,3,4,5,6,7.7];
    let oddNums = nums4.filter(ele => ele % 2 === 1 );
    // console.log(oddNums);
// level 2:
    // Given an array of numbers, add all the odd ones
    let nums5 = [1,2,3,4,5,6,7];
    let oddNums2 = nums5.filter(num => (num % 2 === 1)).reduce((num, total) => num + total); 

    // console.log(oddNums2);

// // level 3:
//     // Given an array of people (array given below), add all heights together
    let people = [
        {name: 'Sharmania', height: '130cm' },
        {name: 'Jessica', height: '160cm' },
        {name: 'Ali', height: '180cm' },
        {name: 'Hara', height: '170cm' },
    ]

    let totalHeight = (param) => {
        let heights = [];

        for (let i = 0; i < param.length; i++) {
            let element = param[i];
            heights.push(parseInt(element['height']));
        }

        return heights.reduce((height, total) => height + total);
    }
    console.log(totalHeight(people));
    

// Create a function that sorts through the array of strings and returns them alphabetically //

let animals3 = ['zebra', 'lion', 'tiger', 'bear', 'dog', 'cat', 'alligator'];

 function alphabetOrder(param) {
     
    for(let i = 0; i < param.length; i++) {
         for (let j = 0; j < param.length; j++) {
             let element = param[j];
             let nextEle = param[j+1];
      
              if (element > nextEle){
                  param[j+1] = element
                  param[j] = nextEle;
                

            }

        }

    }
     return param;
 }
console.log(alphabetOrder(animals3));



// higher order function practice
// Map

// level 0: using .map() do the following
    // double the values of any array of numbers
    let doubleValue = [5,10,15,20].map(n => n * 2);
    //console.log(doubleValue); //output: 10,20,30,40

// level 1: using .map() do the following
    // grab the first letter of an array of strings
    let months = ['May', 'June', 'July', 'August'].map(x => x[0]);
    console.log(months);
    // grab the first element of an array of arrays
    let arrays = [['hello', 'world'], ['stop', 'go'], ['hi', 'bye']].map(str => str[0]);
    //console.log(arrays);


// level 2: using .map() do the following
    // grab the last letter of an array of strings
    let months2 = ['May', 'June', 'July', 'August'].map(str => str.slice(-1));
    //console.log(months2);
    // grab the last letter of an array of arrays
    let arrays2 = [['lawn', 'ice', 'mice'], ['rice', 'spice', 'sky'], ['newport', 'marlboro']];//.map(str => str.slice(-1));//not done
    let lastLetter = arrays2.map(ele => ele[ele.length-1].slice(-1));
    console.log(lastLetter)

// level 3: using .map() do the following
    // create a new array of fullNames from an array of objects where ONE object looks similar to this:{first: 'Nic', last: 'Leask'};
    // Input: [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    // Output: ['Ro Pili', 'Nic Leask'];
    let firstLast = [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    let fullNames = firstLast.map(name => [name.first, name.last].join(' '));
    //console.log(fullNames);   
        
// level 4: using .map() do the following
    // create a new array of objects from an array of objects where ONE object looks similar to this:{first: 'Nic', last: 'Leask'};
    // Input:  [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    // Output: [{first: 'Ro', last: 'Pili', fullName: 'Ro Pili', initials: 'RP'}, {first: 'Nic', last: 'Leask', fullName: 'Nic Leask', initials: 'NL'}];

    let firstLast1 = [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    let newObj = firstLast1.map((obj) => {
        return{
            first: obj['first'],
            last: obj['last'],
            fullName: obj['first'] + ' ' + obj['last'],
            initials: obj['first'] [0] + obj['last'] [0],
        };
    });
    console.log(newObj)

        
        
        
        
        