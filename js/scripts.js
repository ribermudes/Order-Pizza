//Back End Logic
function Pizza (size, topping, price) {
  this.size = size;
  this.topping = topping;
}

  var pizzaTotal = 0;

  Pizza.prototype.pizzaTotal = function() {
    return this.size + this.topping
  }





//Front End Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("#size-choices").val());
    var inputtedTopping1 = parseInt($("#toppings-choices-meat").val());
    var inputtedTopping2 = parseInt($("#toppings-choices-veggies").val());

    var pizzaPrice = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2);

    var displayPrice = pizzaPrice.size + pizzaPrice.topping;

  $("#pizza-output").show();
  $("#pizza-output").text(displayPrice);
   });
 });
