/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {

  const cartItems = JSON.parse(localStorage.getItem('savedCart')) || [];
  console.log(cartItems) ;
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart(); // 
  clearCart();//ip
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  // if(table.hasChildNodes()){
  //   let children = table.childNodes ;
  //   for (let  i=0 ; i <children.length ; i++ ){
  //    children[i].remove() ; 
  //   }

  // } //end if 

  
  

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // console.log('SHOWCART');

  // TODO: Find the table body
     let table_body = document.getElementById();
    // table.tBodies
  //  console.log(table_body ) ;

  // TODO: Iterate over the items in the cart
  console.log(cart.items.length);
  for (let i = 0; i < cart.items['items'].length; i++) {
    console.log('showcart in for ');
    console.log(cart.items['items'][i]);
    let newRow = document.createElement('tr');

    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteLink = document.createElement('td');
    deleteLink.textContent = 'X';   //#ip
    console.log(cart.items['items'][i].product);
    let quantity = document.createElement('td');
    quantity.textContent = cart.items['items'][i].quantity;
    let item = document.createElement('td');
    item.textContent = cart.items['items'][i].product;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    newRow.appendChild(deleteLink);
    newRow.appendChild(quantity);
    newRow.appendChild(item);
    table_body.appendChild(newRow);
    // table.tBodies.appendChild(newRow) ;

  }


  


}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
