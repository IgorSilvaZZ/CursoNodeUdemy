module.exports = () => {
    global.io.on('connect', (socket) => {
        socket.on('msgParaServidor', (data) => {

            //Dialogo
            //Executar apenas para nossa Tela
            socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem })
    
            //Executar para todos os outros usuario que estiverem conectados no canal do socket
            socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem })
    
    
            //Participantes
            if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
                //Executar apenas para nossa Tela
                socket.emit('participantesParaCliente', { apelido: data.apelido })
    
                //Executar para todos os outros usuario que estiverem conectados no canal do socket
                socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido })
            }
        })
    })
}