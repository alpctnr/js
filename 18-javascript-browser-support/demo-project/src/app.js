const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  if (navigator.clipboard) { // Detect feature supported on browser!
    navigator.clipboard.writeText(text).then(result => {
      console.log(result);
    });
  } else {
    console.log('Your browser does not support clipboard operation !');
  }

});