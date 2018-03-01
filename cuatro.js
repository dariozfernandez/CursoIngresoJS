function Mostrar()
{
	//ingresamos 2 numeros si son = contatenamos 3 3 = 33
	//si el primero es > que el segundo lo multiplicamos 10 8 =80
	//si el primero es < que el segunto lo restamos 8 10 = -2

	


	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno= prompt("ingrese un numero");
	numeroUno= parseInt(numeroUno);

	numeroDos= prompt("ingrese un numero");
	numeroDos= parseInt(numeroDos);


	if(numeroUno == numeroDos)

		{
			resultado= numeroUno + "" + numeroDos;
		}

	if(numeroUno >numeroDos)
	
		{
			resultado= numeroUno * numeroDos;

		}	
	else

		{
			resultado= numeroUno - numeroDos;

		}

		document.write("<br> su resultado es" + resultado);
}

