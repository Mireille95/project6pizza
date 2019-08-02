$(document).ready(function() {
    $("#add-pizza").click(function() {
      $("#new-addresses").append('<div class="new-address">' +
                                       '<div class="form-group">' +
                                       '<label for = "new-name">Pizza name</label>' +
                                      '<select name="name" id ="new-last-name" class="form-control" required>'+
                                              ' <option >Neapolitan Pizza</option>' +
                                               '<option >New York-Style Pizza</option>' +
                                               '<option >Sicilian Pizza</option>'+
                                               '<option >Greek Pizza</option>' +
                                               '<option >Chicago Pizza</option>' +
                                               '<option >St. Louis Pizza</option>' +
                                               '<option >Sicilian Pizza</option>' +
                                              ' <option >Detroit Pizza</option>' +
                                               '<option >pizza margarta</option>'+
                                               '<option >Tikka Chicken Pizza</option>'+
                                              ' <option >Hawaiian Pizza</option>'+
                                               '<option >Vegetarian Pizza</option>'+
                                               '<option >Pepperoni Pizza</option>'+
                                               '<option >Italian Pizza</option>'+
                                               '<option >Supreme Pizza</option>'+
                                               '<option >Pizza Combo</option>'+
                                               '<option >Meat lovers Pizza</option>'+
                                               '<option >Mr chips Pizza</option>'+
                                           ' </select>'+
                                   '</div>'+
                                   '</div>'+
                            '<div class="new-address">'+
                                '<div class="form-group">'+
                                       '<label for ="new-middle-name">Pizza size</label>'+
                                      
                                               '<select name="Location" id ="loc" class="form-control" required>'+
                                                     '<option >large</option>'+
                                                     '<option >medium</option>'+
                                                    '<option >small</option>'+
                                              '</select>'+
                                '</div>'+
                                '</div>'+
                            '<div class="new-address">'+
                                '<div class="form-group">'+
                                       '<label for ="new-name">Pizza Crust</label>'+
                                      
                                              ' <select name="Location" id ="loc" class="form-control" required>'
                                               +
                                                                   '<option >Crispy</option>'+
                                                                 ' <option >Stuffed</option>'+
                                                                 '  <option >Gluten-free</option>'+
                                              '</select>   '+        
                               ' </div>'+
                               ' </div>'+
                         '<div class="new-address">'+
                                '<div class="form-group">'+
                                       '<label for ="new-name">Pizza Popping</label>'+
                                      
                                               '<select name="Location" id ="loc" class="form-control" required>'+
                                                                   '<option >Pepperoni</option>'+
                                                                   '<option >Mushrooms</option>'+
                                                                   '<option >Onions</option>'+
                                                                   '<option >Sausage</option>'+
                                                                  ' <option >Bacon</option>'+
                                                                   '<option >Extra cheese</option>'+
                                                                   '<option >Black olives</option>'+
                                                                   '<option >Green peppe</option>'+
                                               '</select> '+        
                                '</div>'+
                           '</div>');
    });
  });
   function Pizza(name,size,crust,popping) {
    this.name= name,
    this.size = size; 
    this.crust= crust,
    this.popping= popping; 
   
     }
    function Pizzaa(name1,size1,crust1,popping1) {
     
      this.name1 = name1,
      this.size1 = size1; 
      this.crust1= crust1,
      this.popping1= popping1; 
     
       }
    Pizza.prototype.fullOrder = function() {
        return this.name+ " " + this.size+ " " +this.crust+ " " +this.popping;
      }
    Pizzaa.prototype.fullOrder = function() {
      return this.name1+ " " +this.size1+ " " +this.crust1+ " " +this.popping1;
      }
   $(document).ready(function(){
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#first-name").val();
      var inputtedLocation = $("select#location").val();
      var inputtedPizzaName = $("select#Names").val();
      var inputtedPizzaSize = $("select#size").val();
      var inputtedPizzaCrust = $("select#crust").val();
      var inputtedPizzaPopping = $("select#popping").val();
     
      var newPizza = new Pizza(inputtedFirstName,inputtedLocation,inputtedPizzaName,inputtedPizzaSize,inputtedPizzaCrust,inputtedPizzaPopping);
  
      console.log(newPizza);

      $("ul#contacts").append("<li><span class='contact'>" + newPizza.fullOrder() + "</span></li>");

      $(".contact").last().click(function() {
          $("#show-contact").show();
          $(".name1").text(newPizza.name);
          $(".name2").text(newPizza.size);
          $(".name3").text(newPizza.crust);
          $(".name4").text(newPizza.popping);
        }); 
      });
        $("input#new-first-name").val("");
        $("input#new-location").val(""); 
        $("input#new-names").val(""); 
        $("input#new-size").val(""); 
        $("input#new-crust").val(""); 
        $("input#new-popping").val(""); 
      });
    


//     $(".new-address").each(function() {
//         var inputtedLocation = $(this).find("input.new-address").val();
//         var inputtedPname= $(this).find("input.new-name").val();
//         var inputtedPsize = $(this).find("input.new-name1").val();
//         var inputtedPcrust = $(this).find("input.new-name2").val();
//         var inputtedPpopping= $(this).find("input.new-name3").val();
        
//         var newAddress = new Address(inputtedLocation, inputtedPname, inputtedPsize,inputtedPcrust,inputtedPpopping);
//         newPizza.addresses.push(newAddress);
//       })

//       $("ul#addresses").text("");
//         newPizza.addresses.forEach(function(address) {
//           $("ul#addresses").append("<li>" + address.Location + ", " + address.Pname + " " + address.Psize + " " + address.Pcrust + " " + address.Ppopping + "</li>");
// })
// $(document).ready(function() {

//     $("#add-pizza").click(function() {
//       $("#new-addresses").append('<div id="new-addresses">' +
//       '<div class="form-group">'+
//       '<label for ="new-address">Location</label>'+
//              '<select name="Location" id ="loc" class="form-control" required>'+
//                       '<option >Kicukiro</option>'+
//                       '<option >Gasabo</option>'+
//                       '<option >Nyarugenge</option>'+
//               '</select> '+
//              '</div>'+
//            '</div>'+
//             '<div id="new-addresses">'+
//            '<div class="form-group">'+
//                    '<label for = "new-name">Pizza name</label>'+
//                   '<select name="name" id ="new-last-name" class="form-control" required>'+
//                           ' <option >Neapolitan Pizza</option>'+
//                            '<option >New York-Style Pizza</option>'+
//                            '<option >Sicilian Pizza</option>'+
//                            '<option >Greek Pizza</option>'+
//                            '<option value="5">Chicago Pizza</option>'+
//                            '<option >St. Louis Pizza</option>'+
//                            '<option >Sicilian Pizza</option>'+
//                           ' <option >Detroit Pizza</option>'+
//                            '<option >pizza margarta</option>'+
//                            '<option >Tikka Chicken Pizza</option>'+
//                           ' <option >Hawaiian Pizza</option>'+
//                            '<option >Vegetarian Pizza</option>'+
//                            '<option >Pepperoni Pizza</option>'+
//                            '<option >Italian Pizza</option>'+
//                            '<option >Supreme Pizza</option>'+
//                            '<option >Pizza Combo</option>'+
//                            '<option >Meat lovers Pizza</option>'+
//                            '<option >Mr chips Pizza</option>'+
//                        ' </select>'+
//                '</div>'+
//             '<div class="form-group">'+
//                    '<label for ="new-middle-name">Pizza size</label>'+
                  
//                            '<select name="Location" id ="loc" class="form-control" required>'+
//                                  '<option >large</option>'+
//                                  '<option >medium</option>'+
//                                 '<option >small</option>'+
//                           '</select>'+
//             '</div>'+
//             '<div class="form-group">'+
//                    '<label for ="new-name">Pizza Crust</label>'+
                  
//                           ' <select name="Location" id ="loc" class="form-control" required>'
//                            +
//                                                '<option >Crispy</option>'+
//                                              ' <option >Stuffed</option>'+
//                                              '  <option >Gluten-free</option>'+
//                           '</select>   '+        
//            ' </div>'+
//             '<div class="form-group">'+
//                    '<label for ="new-name">Pizza Popping</label>'+
                  
//                            '<select name="Location" id ="loc" class="form-control" required>'+
//                                                '<option >Pepperoni</option>'+
//                                                '<option >Mushrooms</option>'+
//                                                '<option >Onions</option>'+
//                                                '<option >Sausage</option>'+
//                                               ' <option >Bacon</option>'+
//                                                '<option >Extra cheese</option>'+
//                                                '<option >Black olives</option>'+
//                                                '<option >Green peppe</option>'+
//                            '</select> '+        
//             '</div>'+
//        '</div>' );
//     });
  
//     $("form#new-contact").submit(function(event) {
//       event.preventDefault();
  
//       var inputtedName = $("input#new-first-name").val();
//       var inputtedlocation = $("input#new-number").val();
//       var newPizza = new Contact(inputtedName, inputtedlocation);
  
//       $(".new-address").each(function() {
//         var inputtedLocation = $(this).find("input.new-address").val();
//         var inputtedPname= $(this).find("input.new-name").val();
//         var inputtedPsize = $(this).find("input.new-name1").val();
//         var inputtedPcrust = $(this).find("input.new-name2").val();
//         var inputtedPpopping= $(this).find("input.new-name3").val();
//         var newAddress = new Address(inputtedLocation, inputtedPname, inputtedPsize,inputtedPcrust,inputtedPpopping);
//         newPizza.addresses.push(newAddress);
//       });
  
//       $(".contact").last().click(function() {
//         $("#show-contact").show();
//         $(".first-name").text(newPizza.Name);
//         $(".name1").text(newPizza.Pname);
//         $(".name2").text(newPizza.Psize);
//         $(".name3").text(newPizza.Pcrust);
//         $(".name4").text(newPizza.Ppopping);
//         $("ul#addresses").text("");
//         newPizza.addresses.forEach(function(address) {
//           $("ul#addresses").append("<li>" + address.Location + ", " + address.Pname + " " + address.Psize + " " + address.Pcrust + " " + address.Ppopping + "</li>");
// })
//       });
  
//       $("input#new-first-name").val("");
//       $("input#new-firstName").val("");
//       $("input#new-size").val("");
//       $("input#new-crust").val("");
//       $("input#new-popping").val("");
//       $("input.new-address").val("");
    
  
//     });
//   });
// //   function resetFields() {
// //     $("input#new-first-name").val("");
// //     $("input#new-last-name").val("");
// //     $("input.new-street").val("");
// //     $("input.new-city").val("");
// //     $("input.new-county").val("");
// // }
// });