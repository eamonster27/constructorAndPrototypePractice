//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry, color, owner, status) {
  this.hungry = hungry;
  this.color = color;
  this.owner = owner;
  this.status = status;

}

// Instances of Dog
// Needed: sadie, moonshine, atticus
var sadie = new Dog(true, "black", "Mason", "normal");
var moonshine = new Dog(true);
sadie.hungry = false;
var atticus = new Dog(false);
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
  this.pet = function(dog){
    dog.status = "happy";
  }
  this.feed = function(dog){
    dog.hungry = false;
  }
}

// Instances of Human
// Needed: mason, julia
var mason = new Human(false);
var julia = new Human(true);
