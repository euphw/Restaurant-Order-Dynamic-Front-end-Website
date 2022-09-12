/*========== get data and display in page(Yuefeng Wang)=========*/

  // creat the class to store dishes data
  const cartDom = document.querySelector(".list-group");
  class product {
      constructor(name,price,amount) {
        this.name = name;  //its type is string.
        this.price = price; //its type is number.
        this.amount = amount; //its type is number.
        this.subtotal = price*amount;  //type is number.
      }
  
    //return formatted html
    displayInfo(){
      cartDom.insertAdjacentHTML("beforeend",`
      <li class="list-group-item d-flex justify-content-between lh-sm">
      <div class="cart">
        <h6 class="my-0">`+this.name+`</h6>
      </div>
      <div>
        <input type="number" class="my-0 cart_item_quantity" value="`+this.amount+`" data-price="`+this.price+`">
      </div>
      <div class="cart">
        <h6 class="my-0 cart-item-total"><span>$<span>`+this.subtotal+`</h6>
      </div>
      <div>
        <button class="badge badge-danger" type="button" data-action="remove-item">&times;
      </div>
    </li> `);
  
    }
  
  }
  
  // Create the objects
  var productArray = [];
  
  //loop over array and print
  function displayCart(){
    for(var product of productArray){
       product.displayInfo();
    }
  }

/*==========  ready for getting data=========*/
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', get)
  } else {
    get()
  }
  
  function get () {
    // (A) GET BACK PASS VARS
    var passvars = document.cookie
      .split("; ")
      .find(row => row.startsWith("pass"))
      .substring(5);
  
    // (B) PARSE BACK
    var params = new URLSearchParams(passvars),
    storeArray = JSON.parse(params.get("storeArray"));

    // Every dish data converts a object then add to array
    for(var item of storeArray){
        var newRecord = new product(item.name,item.price,item.amount);
        productArray.push(newRecord);
    }
    displayCart(); //dispaly the dishes in cart
    recalculateCart(); // calculate the total price
  
     
    // When users change the number of dish the subtotal price and total price will change
    $(".cart_item_quantity").change(function(){
      var $this = $(this);
      var price = $this.attr("data-price");
      var quantity = $this.val();
      var total = price * quantity;
      $this.parent().parent().find(".cart-item-total").html("<span>$<span>"+ total);
      recalculateCart();
    });
  
  
    // When users click remove a botton can remove the dish
    $(".badge-danger").click(function() {
    var parent = $(this)
      .parent()
      .parent();
    parent.remove();
    recalculateCart();
    });
  

    // calculate the total price
    function recalculateCart() {
    var subTotal = 0;
    var qutities = $(".cart_item_quantity");
    $.each(qutities, function() {
      var itemTotal = $(this).val() * $(this).attr("data-price");
      subTotal += itemTotal;
      })
    $("#total").html(subTotal.toFixed(2));
    }
  
  }
/*========== get data and display end(Yuefeng Wang)=========*/