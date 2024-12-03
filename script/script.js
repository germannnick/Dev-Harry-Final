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

 $("#btnClear").on("click", ()=> {location.reload()});


 //code form from Grok (fetch function), edited to work for my page.
$("#btnPrevOrder").on("click", ()=> {
fetch('prevOrder/rickAstley.json').then(response => response.json()).then(data => {
// User    
   document.getElementById('inputUserName').value = data.order.userName;
  
// Crust
   document.querySelector(`input[name="Crust"][value="${data.order.crust}"]`).checked = true;
  
// Sauce
  document.querySelector(`input[name="Sauce"][value="${data.order.sauce}"]`).checked = true;
  
// Toppings
  data.order.toppings.forEach(topping => {
    document.querySelector(`input[value="${topping}"]`).checked = true;
   });
  
// Dine In
  document.getElementById('dineSwitch').checked = data.order.dineIn;
  
// Tip
  document.getElementById('tipSelector').value = data.order.tip;
  }).catch(err => console.error('Failed to load JSON:', err));

});
});
