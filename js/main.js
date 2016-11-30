//Definicion de las variables
    var nombre = $('#name').val();
    var apellido = $('#apellido').val();
    var correo = $('#correo').val();
//Validacion de los campos nombre, apellido y correo
function validacion(){
	if(nombre.length>30){
		var span=("<span>El nombre ingresado debe tener menos de 30 letras</span>");
        $(".capturaName").append(span);
	}
	if(apellido.length>30){
		var span=("<span>El apellido ingresado debe tener menos de 30 letras</span>");
        $(".capturApellido").append(span);
	}
	if(correo.length>50){
		var span=("<span>El email ingresado debe tener menos de 50 caracteres</span>");
        $(".capturaCorreo").append(span);
	}
}
validacion();

