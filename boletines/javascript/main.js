/*
//DOM
 //seleciona un solo elemento, y devuelve el primero que consiga
let link = document.querySelector('a');

//Selecciona varios elementos, y devuelve todos los elemento en un array
let links = document.querySelectorAll('a');
//console.log(link);
links.forEach(function(link){
  console.log(link);
});


let celdas = document.querySelectorAll('td');

celdas.forEach(function(celda){
  celda.addEventListener('click',function(){
    console.log(this);
  });
});
*/
let links = document.querySelectorAll('.close');

links.forEach(function(link){

  link.addEventListener('click',function(ev){
    ev.preventDefault();

    let content = document.querySelector('.content');
      content.classList.remove('fadeInDown');
      content.classList.remove('animated');

      content.classList.add('fadeOutUp');
      content.classList.add('animated');
      //se retrasa el redireccionamiento
      setTimeout(function(){
          location.href='/boletines';
      },1500);

    return false;
  });
});
