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

