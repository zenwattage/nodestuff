

function Character(name, profession, gender, age, strength, hp) {
  
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;


//console.log(steve);


// function printStats(object) {
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(object[key]);
//     }
//   }
// }

this.printStats = function () {
  console.log("Name" + this.name + "\n Profession: " + this.profession + "\n Gender: " + this.gender + "\n Age: " + this.age + "\n Strength: " + this.strength + "\n HP: " + hp);
}



//printStats(steve);


  this.IsAlive = function() {
    if (hp > 0) {
      return true;
    } else {
      return false;
    }
  }

} //end of Character function


var steve = new Character("steve", "blacksmith","female", 53, 35, 50);

var jeff = new Character("jeff", "tool", "male", 25, 40, 30);


//console.log(steve.IsAlive);
console.log(jeff.IsAlive);




