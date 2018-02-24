function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);


	while( numero<0 || numero>9)

	{
		var numero=prompt("error : ingrese de nuevo " );
		break;
		
	}
		

}//FIN DE LA FUNCIÓN