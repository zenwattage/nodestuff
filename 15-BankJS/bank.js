var fs = require('fs');

var action = process.argv[2];

var value = process.argv[3];

if(action === 'total') {
  total();

} else if (action === 'deposit') {
  deposit();
} else if (action === 'withdraw') {
   withdraw();
 } else if ( action === 'lotto') {
   lotto();
 } else {
   console.log('command not found');
 }


 function deposit() {
   var formattedValue = ', ' + value;
   fs.appendFile('bank.txt', formattedValue , function(err){
     if(err){
     return console.log(err);
   }
   console.log('Deposited ' + value);
 });
}


function withdraw() {
  var formattedValue = ', -' + value;
   fs.appendFile('bank.txt', formattedValue , function(err){
     if(err){
     return console.log(err);
   }
   
   console.log('Withdrew  ' + value);
 });

}



function total() {

  fs.readFile('bank.txt', 'utf8', function(err, data) {
    if(err){
      console.log(err);
    }

    var splitData = data.split(', ');
    //console.log(splitData);
    var total = 0;

    for (var i = 0; i < splitData.length; i++) {
      total += parseFloat(splitData[i]);
      
    }
    console.log("Your total is: " + total.toFixed(2)+ '.');


  })



}
