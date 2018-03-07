//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas (validar que sea mayor a 0,”cero”)
	 //de los 7 días de la semana por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor importe de venta


	 var importe;
	 var contador=0;
	 var importeMayor;
	 var importeMenor;

	 while (contador < 7)

	 {
	 	contador ++;
	 	importe= parseInt(prompt("ingrese el importe"));

	 	while (isNaN(importe) || importe <= 0)
	 		 {

	 		 	importe=prompt( "error: ingrese el importe nuevamente");

	 		 }
	 	if (contador == 1)
	 	{
	 		importeMayor = importe;
	 		importeMenor = importe;

	 	}
	 		else
	 			{
	 				if (importeMayor < importe)

	 				{
	 					importeMayor = importe;
	 				}

	 				if (importeMenor > importe)

	 				{
	 					importeMenor = importe;
	 				}
	 			}



	 }
	document.write("el importe mayor es" + importeMayor + " y el importe menor es " + importeMenor);
}

