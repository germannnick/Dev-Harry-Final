$(()=> {
    
 console.log( "ready!" );
 
 $("#btnSubmit").on("click", (event)=> {
   event.preventDefault(); 
   
   $("#orderName").text("@" +
     $('#inputUserName').val()
   );
   
    var selectedCrust = $("input[name=Crust]:checked").val();

    $("#crustType").text("Crust Type: " + selectedCrust);
   console.log('Selected Crust:', selectedCrust);
   // IDK why this is send to console but not text the html
   // $("#crustType").text("Crust Type: " + $("#Crust").val());
   // console.log("Sauce Type: " + $("#Crust").val());
   
   var selectedSauce = $("input[name=Sauce]:checked").val();

    $("#sauceType").text("Sauce Type: " + selectedSauce);
   console.log('Selected Sauce:', selectedSauce);
   
   //Toppings area.
    var toppings = [];
    $('.form-check-input abc[type="checkbox"]:checked').each(function() {
        toppings.push($(this).val());
    });

    // make array, code snippet from grok.
    var toppingsDisplay = toppings.length > 0 ? toppings.join(', ') : "Just Cheese"; //end code snippet.

    $('#toppings').text('Toppings: ' + toppingsDisplay);
   
   
    if ($('#mySwitch').prop('checked')) {
        $('#dineIn').text("Dining In");
    } else {
        $('#dineIn').text("Carryout");
    }
   
   // if they are dinning in, display tip amount selected
   if ($('#mySwitch').prop('checked')) {
        $('#tip').text("Tip= " + "15%");
    } else {
        $('#tip').text("Carryout, No tip needed.");
    }
   

   
//    console.log("User Name Value:", $('#inputUserName').val());  
   
//    if($('#checkCat').is(':checked')){
//      console.log("Checkbox Cat Value:", $('#checkCat').val()); 
//    }
   
//     if($('#checkDog').is(':checked')){
//      console.log("Checkbox Dog Value:", $('#checkDog').val()); 
//    }
   
//     console.log("Selected Pet Name:",  $('#inputPetNames').find(":selected").val()); 
  
   //another one: ( "#myselect option:selected" ).text();
    
 })
  
});
$('#btnClear').on('click', (event)=> {
   event.preventDefault();
  
  });