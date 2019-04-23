console.log(process.argv);


var first = process.argv[2];
var second = process.argv[3];

if(first === second) {
  console.log("True");
} else {
  console.log("False");
}
//or
//one liner

console.log(first === second);