const socket = io(); //Mantiene la conexion al servidor


let usuario = document.getElementById('nombre').value;
let mensaje = document.getElementById('mensaje');
let boton = document.getElementById('enviar');

//creo un evento que emite el mensaje cargado en el formulario
boton.addEventListener('click', function(){
    socket.emit('datos', {
        nombre: nombre.value, mensaje: mensaje.value
    });
});


//escucho el evento
socket.on('datos', function(data){
    salida.innerHTML += data.nombre+'<br>'+data.mensaje+'<br>';
});