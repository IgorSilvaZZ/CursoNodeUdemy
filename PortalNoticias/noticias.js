const http = require('http');

const server = http.createServer((req, res) => {

    const categoria = req.url;

    if(categoria == "/tecnlogia"){
        res.end('<html><body>Noticias de Tecnologia</body></html>');
    }else if(categoria == "/moda"){
        res.end('<html><body>Noticias de Moda</body></html>');
    }else if(categoria == "/beleza"){
        res.end('<html><body>Noticias de Beleza</body></html>');
    }else{
        res.end('<html><body>Noticias de Tecnologia</body></html>');
    }
})

server.listen(3333);