// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Para El Model de seleccionar paises en jquery
var modal = $('#myModal');
var btn = $('#myBtn');
var span =$('.close')[0];

// Para abrir el modal haciendo click al boton
btn.click = function() {
    modal.style.display = "block";
}

// para cerrar el modal en la X
span.click = function() {
    modal.style.display = "none";
}

// para hacer click en cualquier el modal y se cierre
window.click = function(ev) {
    if (ev.target == modal) {
        modal.style.display = "none";
    }
}
*/


// Definicion de mi objeto arreglo
var paises = [
	{
		nombre: "chile",
		prefijo: "+569",
		bandera: "../img/cl.png"
	},
	{
		nombre: "argentina",
		prefijo: "+509",
		bandera: "../img/ar.png"
	},
	{
		nombre: "mexico",
		prefijo: "+529",
		bandera: "../img/mx.png"
	}
];

// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
//  modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);

// GENERACION DE CODIGO RAMDOM

$('#codigo').click(function(){
	$('.codeLab').remove();
	var spanCode =  Math.floor(Math.random() * 899 + 100);
	$('.code').append('<span class="codeLab"> LAB -'+spanCode+'</span>');
});

// VALIDACION DEL CODIGO
$('.validacion')

//GOOGLE MAP
var activeEl = 2;
$(function() {
   var items = $('.btn-nav');
   $( items[activeEl] ).addClass('active');
   $( ".btn-nav" ).click(function() {
       $( items[activeEl] ).removeClass('active');
       $( this ).addClass('active');
       activeEl = $( ".btn-nav" ).index( this );
   });
});


function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
   document.body.style.backgroundColor = "white";
};


/* todas las funciones del mapa*/
function myMap() {
 var mapCanvas = document.getElementById("map");
 var mapOptions = {
   center: new google.maps.LatLng(-33.448412, -70.671136), 
   zoom: 10
 }
 var map = new google.maps.Map(mapCanvas, mapOptions);
}

   google.maps.event.addDomListener(window, 'load', initMap);


var x = document.getElementById("map");
function getLocation() {
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
   } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
   }
};
function showPosition(position) {
   x.innerHTML = "Latitude: " + position.coords.latitude + 
   "<br>Longitude: " + position.coords.longitude; 
}
function showPosition(position) {
   var latlon = position.coords.latitude + "," + position.coords.longitude;

   var img_url = "https://maps.googleapis.com/maps/api/staticmap?center= "+latlon+"&zoom=14&size=400x300&sensor=false";

   document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}