//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

//Realizar el algoritmo que al presionar el botón "Mostrar" lea un importe de un producto por prompt y muestre el importe final
// sumándole el IVA (21%)function Mostrar()
{
  
  var importe;
  var importeFinal;
  var iva;

  importe= prompt("ingrese el importe");
  importe= parseInt(importe);

  importeFinal= importe + (importe * 21 / 100);

  alert("su importe final es " + importeFinal);
	
}

