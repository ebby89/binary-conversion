//Back end logic
var numberArray = []

var convertToDecimal = function(baseTwoNumber) {
  for (i = 0; i < baseTwoNumber.length; i++) {
    if (baseTwoNumber[i] !== "0" && baseTwoNumber[i] !== "1") {
      return null;
    }
  }

  return "yay!";
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
