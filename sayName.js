//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

//Now create three instances of Person with data you make up

var me = new Person('Kurt', 26);
var you = new Person('Gabe', 30);
var wife = new Person('Shelbey', 23);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  alert(this.name);
};
