var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({host: '0.0.0.0', port: 3000});


var knex =  require('knex')({
	client: 'sqlite3',
	connection:{
			filename: "./dev.sqlite3"
	}
});

var bookshelf = require('bookshelf')(knex);

var Contact = bookshelf.Model.extend({
	tableName: 'contacts'
})
server.route({
	method: 'GET',
	path: '/api/contacts',
	handler: function(request, reply){
		Contact.fetchAll().then(function(contacts){
			//reply(JSON.stringify(contacts));
			reply({data: contacts});

		});
	},
	config:{
		cors:true
	}
})


server.route({
	method: 'GET',
	path: '/api/contact/{id}',
	handler: function(request, reply){
			new Contact({id:request.params.id}).fetch().then(function(contact){
			reply(JSON.stringify(contact));

			});
	}
})

server.start(function() {
	console.log('Server running at: ', server.info.uri);
});
