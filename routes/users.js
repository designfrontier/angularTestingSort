var express = require('express')
	, router = express.Router()

	, usersCollection = [
		{
			name: 'Daniel Sellers'
			, id: 1
			, roles: [
				'admin'
				, 'reader'
			]
		}
		, {
			name: 'Peter Sellers'
			, id: 2
			, roles: [
				'reader'
			]
		}
		, {
			name: 'Mike Sellers'
			, id: 3
			, roles: [
				'reader'
			]
		}
		, {
			name: 'Benjamin Sellers'
			, id: 4
			, roles: [
				'reader'
			]
		}
	]

	, getUserById = function(idIn) {
		var i = 0
			, id = parseInt(idIn, 10);

		for (i = 0; i < usersCollection.length; i++) {
			if(usersCollection[i].id === id) {
				return usersCollection[i];
			}
		}
	};

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(usersCollection);
});

router.get('/:id', function(req, res) {
	res.send(getUserById(req.params.id));
});

router.post('/', function(req, res) {
	var user = req.body;

	user.id = usersCollection.length + 1;

	if(typeof user.role === 'undefined'){
		user.role = [];
	}

	usersCollection.push(user);

	res.send(user);
});

router.put('/:id', function(req, res) {
	var user = getUserById(req.params.id)
		, key;

	user.name = req.body.name;
	user.roles = req.body.roles;

	res.send(user);
});

module.exports = router;
