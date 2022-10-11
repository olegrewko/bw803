
window.addEventListener('click', function (event){
    var btnS = event.target.closest('.s__btn');
  
      if((btnS.innerText.toLowerCase() === 'в корзину') &&
      (btnS.style.backgroundColor === '#191D27')) {
        btnS.innerText = 'Товар в корзине';
        btnS.style.backgroundColor = '#767676';
    }
    else {
        btnS.innerText = 'В корзину';
        btnS.style.backgroundColor = '#191D27';
    }
  
  }
  );