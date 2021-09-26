const buttonColor = document.querySelector('.change-color-button');
const button = document.querySelector('.button');


buttonColor.addEventListener('click', function() {
  document.querySelectorAll('p').forEach(
    el => el.style.color ===  'black' ? el.style.color =  'blue' :el.style.color =  'black'
);
});

button.addEventListener('click', function() {
  alert('Hola bienvenido a el mundo minimalista');
});