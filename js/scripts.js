//Back End Logic
function Pizza (size, topping) {
  this.pizzaSize = size;
  this.topping = topping;
  this.price = 0;
}

  var pizzaTotal = 0;

  Pizza.prototype.pizzaTotal = function() {
    return this.size + this.topping
  }

  Pizza.prototype.pizzatopping = function () {
    var toppingtotal = this.topping.length +1;
    var pizzaTotal = this.pizzaSize + toppingTotal;
    return pizzaTotal;

  };


//Front End Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("#size-choices").val());
    var inputtedTopping1 = parseInt($("#toppings-choices-meat").val());
    var inputtedTopping2 = parseInt($("#toppings-choices-veggies").val());

    var pizzaPrice = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2);

    var displayPrice = pizzaPrice.pizzaSize + pizzaPrice.topping;

  $("#pizza-output").show();
  $("#pizza-output").text("Your Order Total is: $" + displayPrice);

   });
 });
