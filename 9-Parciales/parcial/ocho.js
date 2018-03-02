function Mostrar()
{

	//3 datos hasta que el cliente quiera
	//datos = nombre del animal, peso del animal que sea >0, y la temperatura del habitat temperatura es entre -40 y +40.
	//informar el nombre del animal mas pesado, el nombre del animal de la temperatura mas baja, 
	//la cantidad de temperaturas pares que se ingresaron
	//el promedio del peso de todos los animales, la temperatura max y temperatura min.

	var nombreDelAnimal;
	var pesoDelAnimal;
	var temperaturaHabitat;
	var nombreAnimalMasPesado;
	var nombreAnimalMasFrio;
	var 


	nombreDelAnimal= prompt( "ingrese el nombre del animal");
	pesoDelAnimal= prompt( "ingrese el peso del animal");
	pesoDelAnimal= parseInt(pesoDelAnimal);
	temperaturaHabitat= ("ingrese la temperatura del habitat");
	temperaturaHabitat= parseInt(temperaturaHabitat);

	while( pesoDelAnimal< 0)
		{	

		
		pesoDelAnimal= parseInt(prompt("error: ingrese el peso del animal"));

		break;

		}

	while( temperaturaHabitat < -40 || temperaturaHabitat > 40)

		{

		
		temperaturaHabitat= parseInt(prompt("error: ingrese la temperatura del habitat"));

		break;
		
		}
	while(no)
}
