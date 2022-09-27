let cart = {
  'art1965': 2,
  'art1964': 2
}

document.onclick = event => {
  // console.log(event.target.classlist);
  if (event.target.classList.contains('count__up')) {
    // plusFunction(event.target.dadaSet.id);
    console.log(event.target.dataset.id);
  }
}
// -------------------------------------------------------------
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  this.classList.add("button tiny expanded secondary");
});

// var btn = document.getElementsByClassName("button tiny expanded secondary");
// btn.addEventListener("click", function() {
//   this.classList.add("active");
// });


function changeText () {
  if (this.innerText == "Добавить в корзину") { // check if text inside is "More"
     this.innerText == "Товар в корзине";    // If so, change to "Less"
  } else {
     this.innerText == "Добавить в корзину";
  }
}

/*
Fetch the buttom element
*/
const button = document.body.querySelector('[data-target="#collapseExample"]');

/*
Add click event listener where we will provide logic that updates the button text
*/
button.addEventListener('click', function() {

  /*
  Update the text of the button to toggle beween "More" and "Less" when clicked
  */
  if(button.innerText.toLowerCase() === 'в корзину') {
    button.innerText = 'Товар в корзине';
  }
  else {
    button.innerText = 'В корзину';
  }
});

