function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

	while(sexo=="f")
	{
		sexo= prompt (" el sexo es femenino");

	}
		while (sexo=="m")
		{
			sexo= prompt(" el sexo es masculino");
	
		}
	sexo= prompt(" error : lo ingresado es incorrecto");


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN