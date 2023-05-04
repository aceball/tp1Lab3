window.onload = iniciar;

function megusta(){
    document.getElementById("megusta-numero").innerHTML = parseInt(document.getElementById("megusta-numero").innerHTML) + 1;
    document.getElementById("btn-mg").onclick = null;
}

function seguir(){
    var seguir = document.getElementById("seguir-btn").innerHTML;
    if(seguir === "Seguir"){
        document.getElementById("seguir-btn").innerHTML = "Siguiendo";
        return;
    }
    else{
        document.getElementById("seguir-btn").innerHTML = "Seguir";
        return;
    }
}

function comentar(){
    var usuario = document.getElementById("usuario").value.trim();
    var comentario = document.getElementById("comentario").value.trim();

  if (usuario === "" || comentario === "") {
    alert("Se debe completar los campos correspondientes");
    return;
  }
  var comentarioFinal = usuario.bold() + ":   " + comentario;

  document.getElementById("comentario-nuevo").innerHTML = comentarioFinal;
}