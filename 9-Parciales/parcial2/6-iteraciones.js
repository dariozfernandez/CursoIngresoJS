//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");

	//Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
	//(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día), e informar 
	//cual fue el mayor importe y cuál fue el menor importe de venta

	var importe;
	var max;
	var min;
	var contador;
	var diaMax;
	var diaMin;


	

	while( contador<7)
		{

		contador++;
		importe= prompt("ingrese el importe");
		importe= parseInt(importe);

		}
		while( importe <= 0 || isNan(importe))
			{

			contador++
			importe= prompt("ingrese el importe");
			importe= parseInt(importe);

			}	
		if(contador== 1)
		{
			diaMax= contador;
			max= importe;
			min= importe;
			diaMin= contador;
		}

			else
			{

				if( importe> max)
				{
					diaMax= contador;
					max= importe;
				}

				if( importe< min)
				{
					diaMin=contador;
					min= importe;
				}
			}

}


