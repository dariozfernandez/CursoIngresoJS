function Mostrar()
{
   //se ingresa un porcentaje de descuento y el importe. mostrar cuanto se debe pagar: 20% 100=80

   var  importe;
   var  importeDescuento= 20;
   var  importeFinal;

   	importe=prompt("ingrese el numero").value;

   	importe=getElementById('importeFinal').value;
   	importe=parseInt(importe);

   	importeFinal= importe - (importe * importeDescuento/100);

   	document.getElementById('importeFinal').value - importeDescuento;



   
}
