function Mostrar()
{
var numerouno;
var numerodos;
var resultado;

numerouno=prompt().value;
numerodos=prompt().value;


numerouno=parseint(numerouno);
numerodos=parseint(numerodos);


if( numerouno == numerodos)

	{
	resultado=numerouno*numerodos;
	}
	else{

		if(numerouno > numerodos)

		{
			resultado=numerouno-numerodos;
		}
		}
		else
			{
			resultado=numerouno+numerodos;
			}
		}


}

