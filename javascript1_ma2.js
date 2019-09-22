//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

Function.prototype.myOwnPrototype = function(a, b){
    return a + b
};


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = myArrayOfNumbers.slice(4, 5);

//3. Delete the last number in the array that you created above.

myArrayOfNumbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of 
// strawberry to banana and strawberries to bananas: 

  function wordChanger() {
    var str = document.getElementById("string").innerHTML;
    var editedString = str.replace(/Strawberries/g, "Bananas").replace(/strawberry/gi, "banana").replace(/strawberries/g, "bananas");
    
    document.getElementById("string").innerHTML = editedString;
  };

  wordChanger();


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, 
// remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var dynamicArray = ['Juventus', ' TIL', ' Manchester UTD', ' Liverpool'];

console.log(dynamicArray);

document.getElementById("array").innerHTML = dynamicArray;

document.getElementById("btn").onclick = function() {arraySwitcher()}; 

function arraySwitcher(){

    dynamicArray.splice(0, 4, 'Ferrari', ' Mercedes', ' Porsche', ' BMW');

    console.log(dynamicArray);
    return document.getElementById("array").innerHTML = dynamicArray;
};

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var arrayOfPeople = [

    {   name : 'Jim',
        age : 20,
        hometown : 'Triangle City'
    },

    {   name : 'Jake',
        age : 33,
        hometown : 'Whiskey Town'
    },

    {   name : 'Josh',
        age : 17,
        hometown : 'Light City'
    }
    ];

 var jake = arrayOfPeople.filter(person => person.name === 'Jake');

//7. Create a simple function that logs the date.

var date = new Date();
console.log(date);