function Mostrar()
{
		//bandera
	var contador=0 , numero;	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt(numero);
		numero=parseint(numero);

		while(isNaN(numero));
			numero=prompt();
			numero=parseint();

		if ( contador == 0)//bandera
		{
			contador++ //bandera
			numero=numero;
			numero=minimo;

		}
		else
		{
			if (maximo < numero)
			{
				maximo=numero;
			}
			else if (minimo>numero)

				minimo=numero;
		}
	}




}//FIN DE LA FUNCIÓN