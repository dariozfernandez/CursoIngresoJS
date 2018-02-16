function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerouno;
	
	numerouno=Math.floor((Math.random() * 10) + 1);
	console.log(numerouno);
	if(numerouno >= 9)
	{
		alert(" excelente ");
	}
	else if(numerouno >= 4 && numerouno < 9)
	{
		alert( " aprobo ");
	}
	else
	{
		alert( " Vamos, la proxima se puede ");
	}

/*
	if ( numerouno >= 9 )  {

	} else  { 
		if ( numerouno >= 4 && numerouno < 9 ) {

		} else {

		}
	} 
*/
}//FIN DE LA FUN