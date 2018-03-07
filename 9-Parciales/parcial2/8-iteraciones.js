//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos (validar que sea positivo) hasta que el usuario
	 //quiera. Informar al terminar el ingreso por document.write: 
//a) la cantidad de números pares. 
//b) el promedio de todos los números ingresados. 
//c) la suma de todos los números. 
//d) El número máximo y el mínimo.

var numero;
var contador=0;
var respuesta= "si"; // cuando el dice hasta que el usuario quiera. se usa esta variable.
var numerosPares=0;
var promedio;
var sumaNumeros=0;
var numeroMax;
var numeroMin;

while( respuesta != "no")

{
	contador++;
	numero=parseInt(prompt("ingrese su numero"));

	while(isNaN(numero) || numero <= 0)
		{
			numero=parseInt(prompt("error, ingrese el numero nuevamente"));
		}

	if(numero %2 == 0 && numero != 0) //contar numeros pares
		{
			numerosPares++;
		}

	if (contador == 1) // todo esto para calcular numero maximo y minimo

		{
			numeroMax = numero;
			numeroMin = numero;
		}
	else

		{
			if(numeroMax < numero)

				{
					numeroMax = numero;
				}

			if(numeroMin > numero)

				{
					numeroMin = numero;
				}
		}

	sumaNumeros= sumaNumeros + numero; //suma de los numeros

	respuesta= prompt("para salir ingrese no");
}

	promedio= sumaNumeros / contador; //para sacar el promedio de todo, se hace afuera del while.

	document.write(" la cantidad de numeros pares es " + numerosPares + " el promedio de todos los numeros ingresado es " + promedio + 

	" la suma de todos los numero es" + sumaNumeros + " el numero maximo es " + numeroMax + " y el numero minimo es " + numeroMin);





}

