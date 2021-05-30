const { http } = require('./server');
const chatSocket = require('./webSockets/chat');

chatSocket();

http.listen(3333);