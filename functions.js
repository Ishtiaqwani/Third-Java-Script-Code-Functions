// I will write a write a function that says hello.
// This function will take an argument, called name, that is string.
function sayHello(name){

  //console.log('Hello!' + name);
}

// I will write variables, which will be strings of my brother's names.

var firstBro = 'Iqhlaq';
var secondBro = 'Sehran';

//Here I call the function sayHello.
sayHello(firstBro);
sayHello(secondBro);

//I will write a function which will greet a person.
//My person will be passed to the function as an object.
// The function will parse that object and great the person.

function greetPerson(person){
  //console.log('Hello,'+person.firstName+'You are'+person.age+'Years old');

}

// I will make an object that discribes a person/firstBro.

var myObject = {
  firstName:'Iqhlaq',
  lastName: 'Wani',
  age: 21
}

//I will make another object, discribes my secondBro.

var myObject2 = {
  firstName: 'Sehran',
  lastName: 'Wani',
  age: 13
}
// I will call greetPerson function, passing myObject as it's argument.
greetPerson(myObject);
greetPerson(myObject2);


// I will make an array of objects/data set, each object  will discribe a person.

var personList= [
  {
    firstName:'Amir',
    lastName: 'Malik',
    age: 23
  },
  {
    firstName: 'Ashiq',
    lastName: 'Malik',
    age: 30
  },
  {
    firstName: 'Samir',
    lastName: 'Lone',
    age: 23
  },
  {
    firstName: 'Tariq',
    lastName: 'Lone',
    age: 28
  },
];

// I will write a function that will great people.
// It takes as its argument, an array, and each item in array is an object,
// that discribes a person.

function greetPeople(list){

// I will loop through the items in my array with a for loop.
for (var i = 0;i<list.length;i++) {

  //This variable is the current item in the array that, the for loop is
  // iterating through
  var currentPerson = list[i];

}
}

// Call the greetPeople function and pass personlist to it.

greetPeople(personList);

// I will make a function that sorts people by age.
//This function takes an argument, called list,
//which is an array of people, where each one is an object.
function sortPeople(list){

  //Creat two array one for older people and for younger ones.
  // These will be blank arrays, that we will populate with our forEach loop.
  var older = [];
  var younger = [];
//Loop through array.
  list.forEach(function(d,i){
  if (d.age < 22){
    younger.push(d);
  } else {
    older.push(d);
  }
  })
  
  
  
  // I am writing a function.
  // and this function will return our arrays as an object.
  var buckets = {
    youngerlist: younger,
    olderlist: older
  };

return buckets;
}
  
// Call sortPeople and pass the personslist to it.

sortPeople(personList);

// I will make another array, with more people.

var morePeople= [
  {
firstName: 'Khusboo',
lastName: 'wani',
age: 21
  },
  {
firstName: 'rahat',
lastName: 'riyaz',
age: 30
  },
  {
friendName: 'Faisal',
lastName: 'Bhat',
age: 27
  },
];
// I am going to run the function again with the new array.

sortPeople(morePeople);

// I created two variables, where sortCousins returns sorted lists of cousins.

var morePeopleSorted = sortPeople(morePeople);
var personlistsorted = sortPeople(personList);

// Isolate the younger list from the sorted list.
var personlistYounger = personlistsorted.youngerlist;

//console log the new list from and the original list to compare.
console.log(personlistYounger);
console.log(personList);