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

   function Contact(one,two,three,four,five,six) {
    this.firstName = one;
    this.location = two; 
    this.name= three,
    this.size = four; 
    this.crust= five,
    this.popping= six; 
   
     }
    Contact.prototype.fullOrder = function() {
        return this.firstName + " " + this.location  + " " ;
      }
   
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#first-name").val();
      var inputtedLocation = $("select#location").val();
      var inputtedPizzaName = $("select#Names").val();
      var inputtedPizzaSize = $("select#size").val();
      var inputtedPizzaCrust = $("select#crust").val();
      var inputtedPizzaPopping = $("select#popping").val();
      var newContact = new Contact(inputtedFirstName,inputtedLocation,inputtedPizzaName,inputtedPizzaSize,inputtedPizzaCrust,inputtedPizzaPopping);
  
      console.log(newContact);
    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullOrder() + "</span></li>");

    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".location").text(newContact.location);
        $(".name1").text(newContact.name);
        $(".name2").text(newContact.size);
        $(".name3").text(newContact.crust);
        $(".name4").text(newContact.popping);
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
//         newContact.addresses.push(newAddress);
//       })

//       $("ul#addresses").text("");
//         newContact.addresses.forEach(function(address) {
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
//       var newContact = new Contact(inputtedName, inputtedlocation);
  
//       $(".new-address").each(function() {
//         var inputtedLocation = $(this).find("input.new-address").val();
//         var inputtedPname= $(this).find("input.new-name").val();
//         var inputtedPsize = $(this).find("input.new-name1").val();
//         var inputtedPcrust = $(this).find("input.new-name2").val();
//         var inputtedPpopping= $(this).find("input.new-name3").val();
//         var newAddress = new Address(inputtedLocation, inputtedPname, inputtedPsize,inputtedPcrust,inputtedPpopping);
//         newContact.addresses.push(newAddress);
//       });
  
//       $(".contact").last().click(function() {
//         $("#show-contact").show();
//         $(".first-name").text(newContact.Name);
//         $(".name1").text(newContact.Pname);
//         $(".name2").text(newContact.Psize);
//         $(".name3").text(newContact.Pcrust);
//         $(".name4").text(newContact.Ppopping);
//         $("ul#addresses").text("");
//         newContact.addresses.forEach(function(address) {
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