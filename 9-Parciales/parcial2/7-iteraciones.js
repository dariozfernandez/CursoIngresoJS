//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10)
	// y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
//a) el promedio de las notas totales. 
//b) la nota más baja. 
//c) la cantidad de varones que su nota haya sido mayor o igual a 6.

var nota;
var sexo;
var contador=0;
var notaMasBaja;
var sumaNotas=0;
var promedioNotas;
var notaMayorVarones=0;


while (contador < 6)

	{
		contador ++;
		nota= parseInt(prompt("ingrese la nota aqui"));
		sexo= prompt(" ingrese el sexo del alumno");
	
		while(isNaN(nota) || nota > 10 || nota <= 0 )

			{
				nota=prompt("error ingrese la nota nuevamente");
			}

		while (sexo != "f" && sexo != "m")
			

			{
				sexo= prompt(" error ingrese el sexo nuevamente");
			}

			if( contador == 1)
				{
					notaMasBaja = nota;
				}

			else
				{
					if (notaMasBaja > nota)

					{
						notaMasBaja = nota;
					}

				}

			if(sexo == "m" && nota >= 6)
			
				{
					notaMayorVarones++;
				}	

			sumaNotas= nota + sumaNotas;
	}

	promedioNotas= sumaNotas / contador;

	document.write("<br> el promedio de las notas totales es " + promedioNotas + " , la nora mas baja es " + notaMasBaja + " y la cantidad de varones que la nota fue mayor igual a 6 es" + notaMayorVarones);
}



