//RI-Creare lo slideshow/carousel base come fatto in live coding a lezione stamattina.

$( document ).ready(function() {
//collego la funzione alla classe next , in modo tale che quando si clicca sulla freccia va avanti
$(".next").click(nextslide);
//collego la funzione alla classe prev , in modo tale che quando si clicca sulla freccia va indietro
$(".prev").click(beforeslide);

});


function nextslide(){
//individuo la posizione delle immagini e delle "frecce"
var posizioneimg = $(".slider-wrapper .images img.active");
var posizionefrecce = $(".nav i.active");
//alle 2 variabili metto removeclass sull'active per rendere l'immagine che andrà dopo l'unica visibile
posizioneimg.removeClass("active");
posizionefrecce.removeClass("active");
//quando posizioneimg raggiunge l'ultima immagine "active" passa alla prima immagine riniziando il giro
if(posizioneimg.hasClass("last")){
  $(".slider-wrapper .images img.first").addClass("active");
  $(".nav i.first").addClass("active");
  //quando invece "posizioneimg" passa alle altre immagini le rende attive con "active"
} else{
  posizioneimg.next("img").addClass("active");
  posizionefrecce.next("i").addClass("active");
}
}

function beforeslide(){
//individuo la posizione delle immagini e delle "frecce"
var posizioneimg = $(".slider-wrapper .images img.active");
var posizionefrecce = $(".nav i.active");
//alle 2 variabili metto removeclass sull'active per rendere l'immagine che andrà prima l'unica visibile
posizioneimg.removeClass("active");
posizionefrecce.removeClass("active");
//quando posizioneimg raggiunge l'ultima immagine "active" passa all'ultima immagine riniziando il giro
if(posizioneimg.hasClass("first")){
  $(".slider-wrapper .images img.last").addClass("active");
  $(".nav i.last").addClass("active");
  //quando invece "posizioneimg" passa alle altre immagini le rende attive con "active"
} else{
  posizioneimg.prev("img").addClass("active");
  posizionefrecce.prev("i").addClass("active");
}
}
