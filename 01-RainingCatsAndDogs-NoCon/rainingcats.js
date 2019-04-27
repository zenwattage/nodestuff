

var dogs = {
  raining: true,
  noise: 'woof',
  makeNoise: function() {
    if(raining){
      console.log(noise);
    }
  }
}

//console.log(dogs.noise);

var cats = {
  raining: false,
  noise: 'Meow!',
  makeNoise: function() {
    if(raining) {
      console.log(noise);
    }
  }
}
console.log(cats.raining);
//console.log(cats.noise);

function massHysteria() {
  if(dogs.raining && cats.raining){
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
  }else {
    console.log()
  }
}


//massHysteria();


// --- ANIMAL CLASS ---
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise,
  this.makeNoise = function () { 
    if(this.raining === true) {
      console.log(this.noise);
    }
   };
}

var dog = new Animal(true, "Woof!");

console.log(dog);