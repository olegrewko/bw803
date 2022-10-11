// let cart = {
//   'art1965': 2,
//   'art1964': 2
// }

// document.onclick = event => {
 
//   if (event.target.classList.contains('count__up')) {
   
//     console.log(event.target.dataset.id);
//   }
// }
// -------------------------------------------------------------
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function() {
//   this.classList.add("button tiny expanded secondary");
// });

// var btn = document.getElementsByClassName("button tiny expanded secondary");
// btn.addEventListener("click", function() {
//   this.classList.add("active");
// });


// function changeText () {
//   if (this.innerText == "Добавить в корзину") { // check if text inside is "More"
//      this.innerText == "Товар в корзине";    // If so, change to "Less"
//   } else {
//      this.innerText == "Добавить в корзину";
//   }
// }

/*
Fetch the buttom element
*/
// const button = document.body.querySelector('[data-target="#collapseExample"]');

/*
Add click event listener where we will provide logic that updates the button text
*/
// button.addEventListener('click', function() {


//   if(button.innerText.toLowerCase() === 'в корзину') {
//     button.innerText = 'Товар в корзине';
//   }
//   else {
//     button.innerText = 'В корзину';
//   }
// });
// ********************************************************************
// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

window.addEventListener('click', function (event){
  const counterWrapper = event.target.closest('.counter-wrapper');
  const counter = counterWrapper.querySelector('[data-counter]');
  // const counter = document.querySelector('[data-counter]');

  console.log('click window');
  console.log(event.target.dataset.action );
 
  if(event.target.dataset.action === 'plus'){
      console.log('plus' );
      // const counterWrapper = event.target.closest('.counter-wrapper');
      console.log(counterWrapper);
      // const counter = counterWrapper.querySelector('[data-counter]');
      console.log(counter);

      // btnPlus.addEventListener('click', function() {
          // if (parseInt(counter.innerText) > 1) {
          counter.innerText = ++counter.innerText;
          // }
      // });

  }
  if(event.target.dataset.action === 'minus'){
      // console.log('minus' );
     
      // console.log(counterWrapper);
      
      // console.log(counter);

     
      // btnMinus.addEventListener('click', function() {
          //  if (parseInt(counter.innerText) > 1) {
          //      counter.innerText = --counter.innerText; 
          //  }
                 
      // });
      // Проверка на товар в корзине
      // if (event.target.closest('.cart-wrapper') &&  parseInt(counter.innerText) === 1){
      //     console.log("In Cart");
      //     event.target.closest('.cart-item').remove();

      // }
      if (parseInt(counter.innerText) > 1) {
          counter.innerText = --counter.innerText; 
      } else   if (event.target.closest('.cart-wrapper') &&  parseInt(counter.innerText) === 1){
          console.log("In Cart");
          event.target.closest('.cart-item').remove();

      } 
      }

});
// color&text*******************************************************
window.addEventListener('click', function (event){
  var btn = event.target.closest('.i__btn');
 

    if((btn.innerText.toLowerCase() === 'в корзину') &&
    (btn.style.backgroundColor === 'orange')) {
      btn.innerText = 'Товар в корзине';
      btn.style.backgroundColor = '#1779ba';

  }
  else {
    btn.innerText = 'В корзину';
    btn.style.backgroundColor = 'orange';

  }





}
);
// color&text&secondary*******************************************************
// window.addEventListener('click', function (event){
//   var btnS = event.target.closest('.s__btn');

//     if((btnS.innerText.toLowerCase() === 'в корзину') &&
//     (btnS.style.backgroundColor === '#191D27')) {
//       btnS.innerText = 'Товар в корзине';
//       btnS.style.backgroundColor = '#767676';
//   }
//   else {
//     ReadableByteStreamController.innerText = 'В корзину';
//     btnS.style.backgroundColor = '#191D27';
//   }

// }
// );
