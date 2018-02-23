function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(resuesta== "si")
	{
		numero=prompt();
		numero=parseint(numero);
		while(isNaN(num))
		{
			numero=prompt();
			numero=parseint(numero);
		}

		if(numero>0)
		{
			positivo+=numero;
		}
		else if (num<0)
		{
			negativo*=numero;
		}
		resuesta=prompt();
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN