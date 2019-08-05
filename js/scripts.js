
function Pizza(firstName, type, size, crust, popping, number, totalPrice) {
  this.firstName = firstName;
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.popping = popping;
  this.number = number;
  this.totalPrice= totalPrice;
  this.order = [];
}
Pizza.prototype.fullOrder = function() {
  return (
    this.firstName +
    " " +
    this.type +
    " " +
    this.size +
    " " +
    this.crust +
    " " +
    this.popping +
    " " +
    this.number +
    " " + 
    this.totalPrice
  );
};

$(document).ready(function() {
  $("#add-pizza").click(function() {
    $("#new-addresses").append(
      '<div class="new-address">' +
        '<div class="form-group">' +
        '<label for = "new-name">Pizza name</label>' +
        '<select name="name" id ="new-last-name" class="form-control" required>' +
        " <option >Neapolitan Pizza</option>" +
        "<option >New York-Style Pizza</option>" +
        "<option >Sicilian Pizza</option>" +
        "<option >Greek Pizza</option>" +
        "<option >Chicago Pizza</option>" +
        "<option >St. Louis Pizza</option>" +
        "<option >Sicilian Pizza</option>" +
        " <option >Detroit Pizza</option>" +
        "<option >pizza margarta</option>" +
        "<option >Tikka Chicken Pizza</option>" +
        " <option >Hawaiian Pizza</option>" +
        "<option >Vegetarian Pizza</option>" +
        "<option >Pepperoni Pizza</option>" +
        "<option >Italian Pizza</option>" +
        "<option >Supreme Pizza</option>" +
        "<option >Pizza Combo</option>" +
        "<option >Meat lovers Pizza</option>" +
        "<option >Mr chips Pizza</option>" +
        " </select>" +
        "</div>" +
        "</div>" +
        '<div class="new-address">' +
        '<div class="form-group">' +
        '<label for ="new-middle-name">Pizza size</label>' +
        '<select name="Location" id ="loc" class="form-control" required>' +
        "<option >large</option>" +
        "<option >medium</option>" +
        "<option >small</option>" +
        "</select>" +
        "</div>" +
        "</div>" +
        '<div class="new-address">' +
        '<div class="form-group">' +
        '<label for ="new-name">Pizza Crust</label>' +
        ' <select name="Location" id ="loc" class="form-control" required>' +
        "<option >Crispy</option>" +
        " <option >Stuffed</option>" +
        "  <option >Gluten-free</option>" +
        "</select>   " +
        " </div>" +
        " </div>" +
        '<div class="new-address">' +
        '<div class="form-group">' +
        '<label for ="new-name">Pizza Popping</label>' +
        '<select name="Location" id ="loc" class="form-control" required>' +
        "<option >Pepperoni</option>" +
        "<option >Mushrooms</option>" +
        "<option >Onions</option>" +
        "<option >Sausage</option>" +
        " <option >Bacon</option>" +
        "<option >Extra cheese</option>" +
        "<option >Black olives</option>" +
        "<option >Green peppe</option>" +
        "</select> " +
        "</div>" +
        "</div>"
    );
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var names = $("input#first-name").val();
    var pizzaT = $("select#type").val();
    var sizes = $("select#size").val();
    var crusts = $("select#crust").val();
    var poppings = $("select#popping").val();
    var numbers = $("input#number").val();
    var price, total;
    var newPizza = new Pizza( names,pizzaT,sizes, crusts,poppings,numbers,price, total);

    // $("ul#we").append("<li><span class='contact'>" + newPizza.fullOrder() + "</span></li>");

    // $(".contact").last().click(function() {
      $("#show-order").show();
        $("#show-order h2").text(newPizza.type);
        $(".first-name").text(newPizza.firstName);
        $(".name1").text(newPizza.type);
        $(".name2").text(newPizza.size);
        $(".name3").text(newPizza.crust);
        $(".name4").text(newPizza.popping);
        $(".name5").text(newPizza.number);
        $(".name6").text(newPizza.totalPrice);
        $("ul#addresses").text(" ");
        newPizza.order.forEach(function(address){
          $("ul#addresses").append("<li>" + address.fullOrder() + "</li>");
        // });
  });
  $("select#type").val('');
  $("select#size").val('');
  $("select#crust").val('');
  $("select#popping").val('');
 


  switch (pizzaT) {
    case (type = "margarta pizza"):
      switch (sizes) {


        case (size = "Small"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 5000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 8000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;

    case (type = "Hawaian"):
      switch (sizes) {
        case (size = "Small"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;

        case (size = "Large"):
          price = 7000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
      }
      break;
    case (type = "Vegetarian"):
      switch (sizes) {
        case (size = "Small"):
          price = 1000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
    case (type = "Pepperoni"):
      switch (sizes) {
        case (size = "Small"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 10000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
    case (type = "Italian"):
      switch (sizes) {
        case (size = "Small"):
          price = 5000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 7000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 9000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
    case (type = "Pizza combo"):
      switch (sizes) {
        case (size = "Small"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 10000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
    case (type = "Supreme"):
      switch (sizes) {
        case (size = "Small"):
          price = 3000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 9000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
    case (type = "Mr chips"):
      switch (sizes) {
        case (size = "Small"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 8000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
    case (type = "Meat lovers"):
      switch (sizes) {
        case (size = "Small"):
          price = 4000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Medium"):
          price = 6000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
        case (size = "Large"):
          price = 10000;
          if (crusts === "Crispy") {
            totalPrice= price * numbers + 1000;
          } else if (crusts === "Stuffed") {
            totalPrice= price * numbers + 1000;
          } else {
            totalPrice= price * numbers + 1000;
          }
          break;
      }
      break;
  }
  switch (poppings) {
    case (popping = "Pepperoni"):
      totalPrice= totalPrice+ 500;
      break;
    case (popping = "Mushrooms"):
      totalPrice= totalPrice+ 500;
      break;
    case (popping = "Sausage"):
      totalPrice= totalPrice+ 500;
      break;
    case (popping = "Extra cheese"):
      totalPrice= totalPrice+ 500;
      break;
    case (popping = "Black olives"):
      totalPrice= totalPrice+ 500;
      break;
    case (popping = "Green peppe"):
      totalPrice = totalPrice + 500;
      break;
  }
  console.log(totalPrice);
  console.log(newPizza);


});
});
