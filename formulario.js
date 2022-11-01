function valida(nombre) {
  var xnombre;
  xnombre = nombre;
  xsexo = document.getElementById("sexo").value;
  if (xsexo === "masculino") {
    alert("Gracias por contactarme amigo " + xnombre);
  }
  if (xsexo === "femeino") {
    alert("Gracias por contactarme amiga " + xnombre);
  }
}
