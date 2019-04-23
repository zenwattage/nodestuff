var reading = require("fs");

reading.readFile("best_things_ever.txt","utf8", function(error, data) {
  //console.log(data);
  var formatting = data.split(',');

  for(var i = 0; i < formatting.length; i++) {
    reading.writeFile("newfile.txt",formatting[i]);
  }

  if(error){
    console.log(error);
  }
});

