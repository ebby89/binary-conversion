//Back end logic
var numberArray = []

var convertToDecimal = function(baseTwoNumber) {

  var total = 0;
  var currentPower = 1;

  for (i = baseTwoNumber.length - 1; i >= 0 ; i--) {
    var currentDigit = baseTwoNumber[i];

    if (currentDigit !== "0" && currentDigit !== "1") {
      return null;
    }
    if (currentDigit === "1") {
      total += currentPower;
    }
    currentPower *= 2;
  }

  return total;
}


//Front end logic
$(document).ready(function(){
  $("#number-form").submit(function(event){
  event.preventDefault();
  var input = $("#number-form [name=input]").val();
  var output = convertToDecimal(input);

  $("#output h1").text(output);
  });
});
