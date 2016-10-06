window.addEventListener("load", function(){
 var botonTexto = document.getElementById("botonTexto");
 botonTexto.addEventListener("click",Texto);
 
 function Texto (e){
   e.preventDefault();
   var textAreaCita = document.createElement("textarea");
   document.body.appendChild(textAreaCita);
   var botonTexto = document.createElement("button");
   var publicarTexto = document.createTextNode("Publicar");
   botonTexto.appendChild(publicarTexto);
   document.body.appendChild(botonTexto);
   var botonElimTexto = document.createElement("button");
   var eliminarTexto = document.createTextNode("Eliminar");
   botonElimTexto.appendChild(eliminarTexto);
   document.body.appendChild(botonElimTexto);
   
 }
 var botonCita = document.getElementById("botonCita");
 botonCita.addEventListener("click",Cita);
 
 function Cita (e){
   e.preventDefault();
   var textArea2 = document.createElement("textarea");
   document.body.appendChild(textArea2);
   var botonCita = document.createElement("button");
   var publicar2 = document.createTextNode("Publicar");
   botonCita.appendChild(publicar2);
   document.body.appendChild(botonElim1);
   
 }
});

var Meme = document.getElementById("botonMeme");
botonMeme.addEventListener("click",Meme);

function Meme (e){
   e.preventDefault();
   var textAreaMeme = document.createElement("textarea");
   document.body.appendChild(textAreaMeme);
   var botonMeme = document.createElement("button");
   var publicarMeme = document.createTextNode("Publicar");
   botonMeme.appendChild(publicarMeme);
   document.body.appendChild(botonElimMeme);
   
 }
});
/*
window.addEventListener("load",bitacora() {

  function bitacora() {
  var addTaskButton = document.getElementsByClassName("btn btn-default dropdown-toggle");
  btn btn-default dropdown-toggle.addEventListener("click",onClickAddTask);
}

function onClickAddTask(e) {
  e.preventDefault();
  var text = getTextAreaValue();
  if (text != "" && text.length <= 140) {
    var newTask = createTask(text);
    addTaskToContainer(newTask);
  } else {
    alert("Ingresa texto entre 0 y 140 caracteres");
  }
}
*/