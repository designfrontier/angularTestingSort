var assert = require('assert')
	, usersRoute = require('./users.js');

describe('Users Route tests', function(){
	var req, res, next;

	before(function(){
		req = {
			route: {
				path: '/'
			}
			, url: '/'
			, method: 'get'
		};

		reqId = {
			route: {
				path: '/1'
			}
			, url: '/1'
			, method: 'get'
		};

		reqPut = {
			route: {
				path: '/1'
			}
			, url: '/1'
			, method: 'put'
			, body: {
				name: 'Daniel A. Sellers'
				, id: 1
				, roles: ['admin', 'reader', 'friend']
			}
		};

		reqPost = {
			route: {
				path: '/'
			}
			, url: '/'
			, method: 'post'
			, body: {
				name: 'Daniel A. Sellars'
				, roles: ['reader', 'friend']
			}
		};

		next = function(){};
	});

	beforeEach(function(){
		res = {
			send: function(dataIn){
				res.result = dataIn;
			}
		};
	})

	it('should return an array of objects for a GET on the / route', function(){
		usersRoute(req, res, next);
		assert(Array.isArray(res.result));
	});

	it('should return an object for a GET on a route with an id', function(){		
		usersRoute(reqId, res, next);
		assert(typeof res.result === 'object');
		assert(typeof res.result.id === 'number');
		assert(typeof res.result.name === 'string');
		assert(Array.isArray(res.result.roles));
	});

	it('should return the new user with an id for a POST on /', function(){
		usersRoute(reqPost, res, next);

		assert(typeof res.result.id === 'number');
	});

	it('should return the updated user for a PUT on a route with an id', function(){
		usersRoute(reqPut, res, next);

		assert(res.result.name === reqPut.body.name);
		assert(parseInt(res.result.id, 10) === reqPut.body.id);
		assert(JSON.stringify(res.result.roles) === JSON.stringify(reqPut.body.roles));
	});
});