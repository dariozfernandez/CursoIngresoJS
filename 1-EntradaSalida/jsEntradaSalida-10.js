/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
	var importe;
	var descuento;
	var resultado;

function MostrarAumento()
{
	importe=document.getElementById('importe').value;
	descuento=document.getElementById('resultado').value;

	importe=parseInt(importe);
	descuento=parseInt(descuento);

	resultado=(importe-(importe*25/100));

	alert("el resultado es " + resultado);


}
