//ES6 JS Classes
class User {
    constructor(name){
      this.name = name;
      this.type = "Trial User"
    }
    //Method 1
    greet(){
      console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
      console.log('Current status: ' + this.type);
    }
  }

  //Instance of the class/new object 
var anonDude = new User("Anon Dude");

  //we can now use the instance and the . operator 
  // to access the 2 methods
anonDude.greet();
anonDude.status();

var anonLady = new User("Anon Lady");

anonLady.greet();
anonLady.status();

var tony = new User("Tony");

tony.greet();
tony.status();