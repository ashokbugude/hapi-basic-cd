var hapi = require('hapi');  


const server = new hapi.Server({      
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
});

/*
server.connection({  
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
});
*/

server.route({  
    path: '/',
    method: 'GET',
    handler: function(request, h) {
        return 'hello world'
    }
})

if (!module.parent) {  
    server.start(function() {
        console.log('Server started: ' + server.info.uri);
    });
}