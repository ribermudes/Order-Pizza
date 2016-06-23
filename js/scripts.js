//Back End Logic
function Pizza (size, topping1, topping2) {
  this.pizzaSize = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.price = 0;
}

  var pizzaTotal = 0;

  Pizza.prototype.pizzaTotal = function() {
    this.price = this.pizzaSize + this.topping1 + this.topping2;
    return this.price
  }



//Front End Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("#size-choices").val());
    var inputtedTopping1 = parseInt($("#toppings-choices-meat").val());
    var inputtedTopping2 = parseInt($("#toppings-choices-veggies").val());

    var pizzaPrice = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2);

    var displayPrice = pizzaPrice.pizzaTotal();

  $("#pizza-output").show();
  $("#pizza-output").text("Your Order Total is: $" + displayPrice);

   });
 });
