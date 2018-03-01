function Mostrar()
{
		//al ingresar 3 numeros, decir cual es el mayor.


	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	

	numeroUno= prompt("ingrese un numero");
	numeroUno= parseInt(numeroUno);
	numeroDos= prompt("ingrese un segundo numero");
	numeroDos= parseInt(numeroDos);
	numeroTres=prompt("ingrese un tercer numero");
	numeroTres=parseInt(numeroTres);

	if (numeroUno > numeroDos && numeroUno > numeroTres)

	{
				mayor = numeroUno;
	}
	else
	{
		if (numeroDos > numeroUno && numeroDos > numeroTres)

				{
					mayor = numeroDos;
				}
				else	
				{
					mayor = numeroTres;
				}
	}

			document.write("El mayor es: " + mayor)
}

