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
    var str = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';
    var res1 = str.replace(/Strawberries/g, "Bananas");
    var res2 = res1.replace(/strawberry/gi, "banana");
    var res3 = res2.replace(/strawberries/g, "bananas");
        return res3;
  };

  console.log(wordChanger());


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, 
// remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var dynamicArray = ['Juventus', 'TIL', 'Manchester UTD', 'Liverpool'];

console.log(dynamicArray);
document.write(dynamicArray);

document.getElementById("btn").onclick = function() {arraySwitcher()}; 

function arraySwitcher(){

    dynamicArray.splice(0, 4, 'Ferrari', 'Mercedes', 'Porsche', 'BMW');

    console.log(dynamicArray);
    return document.write(dynamicArray);
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

 var people = arrayOfPeople.filter(function(name) {
     return name.name === 'Jake';
 });

//7. Create a simple function that logs the date.

var date = new Date();
console.log(date);



