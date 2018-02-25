function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")

		{
			contador++;// suma ilimitada
			numero= prompt("ingrese un numero");
			numero= parseInt(numero);//me dice que el numero es un entero
			
		}

		while(isNaN(numero))

		{

			numero=prompt(" ingrese un numero");
			numero=parseInt(numero);
			
		}

		acumulador= acumulador + numero;
		respuesta=prompt(" para continuar ingrese si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN