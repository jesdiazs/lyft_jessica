//function validaCampo(){ 
//Definicion de las variables
    var nombre = $('#name').val();
    var apelli = $('#apellido').val();
    var correo = $('#correo').val();
//Validacionvalidaciones de los campos nombre, apellido y correo

/*$('#name').on('keyup',function(){ 
	if(nombre.length>30){
		var span=("<span>El nombre ingresado debe tener menos de 30 letras</span>");
        $(".capturaName").append(span);
	}
});


function validaApellido (){
	if(apelli.length<30){
		var span=("<span>El apellido ingresado debe tener menos de 30 letras</span>");
        $(".capturApellido").append(span);
	}
}
validaApellido();*/

$('#correo').on('keyup',function(){
	/*if(correo.length<50){
		var span=("<span>El email ingresado debe tener menos de 50 caracteres</span>");
        $(".capturaCorreo").append(span);*/
	//}else
	$('.borrar').remove(); 
	var span = ("<span class='borrar'>Debe ingresar un correo valido</span>");
	if(!(/\S+@\S+\.\S+/.test(correo))){
        $(".capturaCorreo").append(span);
	}
});
//}
