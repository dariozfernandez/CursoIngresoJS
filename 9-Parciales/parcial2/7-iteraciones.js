//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 7-iteraciones");

	var nota;
	var sexo;
	var acumulador;

	for(i=0 ; i<0 ; i++) {

		while(sexo != "f" && sexo != "m")
		{
			sexo=prompt("");
		}

		while (nota<0 || nota > 10)
		{
			nota= prompt("");
			nota=parseInt(nota);
		}
		acum += nota;
	}
	
}

