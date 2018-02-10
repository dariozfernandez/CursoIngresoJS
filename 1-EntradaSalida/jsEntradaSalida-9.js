/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
	var importe;
	var aumento;
	var resultado;


function MostrarAumento()
{

	importe=document.getElementById('sueldo').value;
	aumento=document.getElementById('resultado').value;

	importe=parseInt(importe);
	aumento=parseInt(aumento);

	resultado=(importe*10)/100+importe;

	alert("su sueldo es " + resultado);
}
