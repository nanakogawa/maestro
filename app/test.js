 var request = require('supertest')('http://localhost:1337');

 describe('Express Backend Tests', function() {

  it('status code 200 for "/"', function(done) {
	 request.get('/')
	 .expect(200)
	 .end(done)
  });
 });