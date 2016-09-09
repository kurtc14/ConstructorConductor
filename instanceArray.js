/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

User.prototype.addUser = function() {
  users.push(this);
};

tyler.addUser();
cahlan.addUser();
lenny.addUser();

console.log('Tyler\'s information is ' + tyler.name + ' ' + tyler.email + ' ' + tyler.pw);
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is ' + lenny.name + ' ' + lenny.email + ' ' + lenny.pw);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

var kurt = new User('Kurt', 'kurtc14@gmail.com', 'iLoveDevMtn');
kurt.addUser();




console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

var listNames = function (list) {
  for (var i in users) {
    console.log(users[i].name);
  }
};

listNames(users);
