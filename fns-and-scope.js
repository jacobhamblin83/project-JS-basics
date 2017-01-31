//////////////////PROBLEM 1////////////////////


//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  return false;
}
  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
  var fullName = prompt("NAME");
    if (fullName != null){
      a = fullName;
      return a;
    } 
}
  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
function welcome(){
 alert("Welcome, " + (getName()));
}
  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //arguments are the values passed into the function when it is invoked. parameters are the variables within the function that the arguments are passed through.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?
//Falsy values are 0,"",NaN,null,undefined,false. If (something) {return truthy:} return falsy:}

  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
function myName(){
  var name = "Jacob";
  return name;
}


//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName;

  //Code Here

//Now alert the result of invoking newMyName

alert(newMyName());



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn(newMyName){
  return name;
}

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();

  //Code Here

//Now invoke innerFn.

innerFn();
