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
    $('.form-check-input[type="checkbox"]:checked').each(function() {
        toppings.push($(this).val());
    });

    // make array, code snippet from grok. Understand this much better after JS course.
    var toppingsDisplay = toppings.length > 0 ? toppings.join(', ') : "Just Cheese"; //end code snippet.

    $('#toppings').text('Toppings: ' + toppingsDisplay);
   
   
   
   // if they are dinning in, display tip amount selected
   let tipAmount = $("#tipSelector").val();
   if ($('#dineSwitch').prop('checked')) {
        $('#tip').text("Tip= " + tipAmount +"%");
    } else {
        $('#tip').text("Carryout, No tip needed.");
    }
 })
  
});


$("#btnClear").on("click", ()=> {location.reload()});
