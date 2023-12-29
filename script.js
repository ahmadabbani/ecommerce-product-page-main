
    let counter = 0;
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const errorMessage = document.getElementById('error-message');
    incrementBtn.addEventListener('click', function() {
      counter++;
      counterValue.textContent = counter;
      errorMessage.textContent = ''; // Clear error message when incrementing
    });

    decrementBtn.addEventListener('click', function() {
      if (counter > 0) {
      counter--;
      counterValue.textContent = counter;
      errorMessage.textContent = ''; // Clear error message when decrementing
    } else {
      errorMessage.textContent = "You can't go below 0!"; //Error message when counter goes below 0
    }
    }); 
   //toggling the menu on a mobile screen
  function toggleMenu() {
  var menu = document.getElementById("list");
  var menuicon = document.getElementById("menu-icon")
  var overlay = document.querySelector('.overlay');
  overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';

// Check both the inline style and computed style
var isNavHidden = window.getComputedStyle(menu, null).getPropertyValue("display") === "none";
  if (isNavHidden) {
    menu.classList.remove("d-none");
    menu.classList.add("d-flex");
    menu.classList.add("menu-display");
    menuicon.innerHTML = '<img src="images/icon-close.svg" alt="Close icon">'; // Close icon
  // Rotate the menu icon
  menuicon.classList.add('rotate-icon1');
  menuicon.classList.remove('rotate-icon2');

}
   else {
    menu.classList.remove("d-flex");
    menu.classList.add("d-none");
    menu.classList.remove("menu-display");
    menuicon.innerHTML ='<img src="images/icon-menu.svg" alt="Menu icon">'; // Menu icon 
    menuicon.classList.remove('rotate-icon1');
    menuicon.classList.add('rotate-icon2');
  }
}

  function togglecart(){
    var basket = document.getElementById("header-basket");
  var cart = document.getElementById("cart")
  // Check both the inline style and computed style
var iscarthidden = window.getComputedStyle(cart, null).getPropertyValue("display") === "none" || cart.style.display === "none";
    if (iscarthidden) {
      cart.style.display = "block";
    } 
    else {
      cart.style.display = "none";
    }
  }

var itemName = document.getElementById("heading1");
var itemPrice = document.getElementById("price");
var quantity = document.getElementById("counter-value");
let items = document.querySelector(".cart-items");
var totaldiv = document.getElementById("subtotal");
var paragraphCounter = 1;
var subtotal = 0;
var totals = [];
function addToCart(){

    //add item to the cart
    if (quantity.textContent == 0) {
    alert("Quantity is zero. Please update the quantity.");
}
else{ 
// Remove the dollar sign
var itemPriceValue = ((itemPrice.textContent).substring(1));
// Calculate the new price based on the multiplication (quantity*price)
var totalprice = parseFloat(itemPriceValue) * parseFloat(quantity.textContent);
// Ensure total price has two decimal places and ends with ".00"
var formattedTotalPrice = totalprice.toFixed(2);
subtotal = parseFloat(formattedTotalPrice) + parseFloat(subtotal);
totals.push(formattedTotalPrice);
 totaldiv.style.display = "block";
  totaldiv.innerHTML = `<strong> SUBTOTAL : $${subtotal}</strong>`;

// Create a new paragraph element
var newparagraph = document.createElement("p");
// Create a new delete icon element
var newicon = document.createElement("div");
//create a new item element 
var newitem = document.createElement("div");
newitem.style.display = "flex";
newitem.style.justifyContent = "space-between";
 // Assign a unique ID based on the counter
 newitem.id = String(paragraphCounter);
 console.log(newitem.id );
 // Increment the counter for the next paragraph
 paragraphCounter++;
// call the active carousel item function
var activeImageElement = getActiveCarouselItem();
// Set the inner HTML of the paragraph with the values of the items
newparagraph.innerHTML = `<img src="${activeImageElement.src}" alt="Active Item Image" width="50" 
    height="50"  style="float: left; margin-right: 10px;  border-radius: 5px;"> ${itemName.textContent} <br>
     <span style="margin-right: 3px;">${itemPrice.textContent}</span> <span style= margin-right: 3px;">x</span>
      <span style="margin-right: 3px;">${quantity.textContent}</span> <strong style="color: black;">$${formattedTotalPrice}</strong>`;
      newicon.innerHTML = `<img src="images/icon-delete.svg" onclick="removeItem('${newitem.id}')" style="cursor: pointer;">`;
      newitem.appendChild(newparagraph);
      newitem.appendChild(newicon);
      // Append the new item as paragraph to the cart items container
items.appendChild(newitem);

//notification function (display the number of items in the cart)
notification();
 }
    Checkcartempty();
    checkoutbuttondisplay();
 }

  //notification (nb of items in the cart)
  var notf =  document.getElementById("notification");
  function notification(){
    if (items.childElementCount === 0) {
      notf.style.display = 'none';
    }
      else{
        notf.style.display = 'block';
         notf.innerHTML = items.childElementCount;
      }
  } 

  // Remove items from the cart
function removeItem(ItemID) {
    
  var itemToRemove = document.getElementById(ItemID);
    itemToRemove.remove(); 
    Checkcartempty();
    checkoutbuttondisplay(); 
    notification();  
    subtotal = parseFloat(subtotal) - parseFloat(totals[ItemID - 1]);
    if (subtotal > 0) {
  totaldiv.innerHTML = `<strong> SUBTOTAL : $${subtotal}</strong>`;
}
else{
  totaldiv.style.display = "none";
}
    }

  let cartemptymsg = document.getElementById("cartemptymsg");
    function Checkcartempty(){
      // If cart is empty
    if (items.childElementCount === 0) {
    cartemptymsg.innerHTML = 'Your cart is empty';
    return true;  // Indicates that the cart is empty
  } 
  else{
    cartemptymsg.innerHTML = '';
    return false;  // Indicates that the cart is not empty
  }
  }
  Checkcartempty();

  let checkoutbtn = document.getElementById("checkoutbtn");
  function checkoutbuttondisplay(){
    if (Checkcartempty()) {
      checkoutbtn.style.display = "none";
    }
    else {
      checkoutbtn.style.display = "block";
    }
  }
  checkoutbuttondisplay();

  // Get the active carousel item
function getActiveCarouselItem() {
  return  document.querySelector('.carousel-indicators img.active');
}

  // Function to conditionally remove data-bs-toggle (modal lightbox) on small screens
  function toggleModal() {
      var modalToggleBtns = document.querySelectorAll('.modal-toggle-btn');

      modalToggleBtns.forEach(function(btn) {
          if (window.innerWidth <= 767.98) {
              btn.removeAttribute('data-bs-toggle');
          } else {
              btn.setAttribute('data-bs-toggle', 'modal');
          }
      });
  }

  // Call the function on window load and resize
  window.addEventListener('load', toggleModal);
  window.addEventListener('resize', toggleModal);


  //animation
  let basket = document.getElementById("basket");
  document.getElementById('addtocart-btn').addEventListener('click', function() {
    basket.style.animation = 'basketanimation 0.5s ease';
    basket.addEventListener('animationend', function() {
      // Reset the animation property after it ends
      basket.style.animation = '';
    }, { once: true }); // Use { once: true } to ensure the event listener is triggered only once
  });
