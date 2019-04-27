

// constructor for digital pal

function DigitalPal(hungry,sleepy,bored,age) {
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = age;


  //feed()

  this.feed = function() {

    if(this.hungry === true){

      console.log("That was yummy!");
      this.hungry = false;
      //console.log(this.hungry);
      
      this.sleepy = true;


    } else {
      console.log("No thanks! I'm full.");
    };

  }

  

  //sleep()
  this.sleep = function() {
    if(this.sleepy === true) {
      console.log('Zzzzzzzz');
      this.sleepy = false;
      this.bored = true;
      increaseAge();
    } else {
      console.log("Not right now. Later?");
    }

  }



  //play()

  //increaseAge()
}



var dog = new DigitalPal(true, true, false, 7);


dog.feed();
console.log(dog.hungry);
console.log(dog.sleepy);
