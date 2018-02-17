function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)

{
	case "Julio":
	case "Agosto":
					alert("Abrigate que hace frio");
					break;

	case "Enero":
	case "Febrero":
	case "Marzo":
	case "junio":

					alert("Ya pasamos el frio, ahora calor!!!");
					break;
}


}//FIN DE LA FUNCIÓN