const express = require('express'); //requiero express
const { listen } = require('socket.io'); //requiero socket
const app = express(); //inicializo express
const path = require('path');//modulo para trabajar con rutas


//configuracion del puerto. Que tome el configurado o el 3000
app.set('port', process.env.PORT || 3000); 
//Inicializar el servidor

//enviamos index.html al navegador
app.use(express.static(path.join(__dirname, 'public'))); //Modulo de express para enviar archivos estaticos 


//Inicializo el servidor
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


const SocketIo = require('socket.io'); //modulo para trabajar con socket
const io = SocketIo(server);

//escucha los eventos
io.on('connection', (socket) => {
    socket.on('datos', (data) => {//recibo los datos y los envio a todos
        //console.log(data);
        io.sockets.emit('datos', data);
    })
});

