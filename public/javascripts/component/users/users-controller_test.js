describe('Angular Tests', function () {
    describe('User Controller', function(){
        beforeEach(module('lfeApp.UsersCtrl'));

        it("module should be registered", inject(function(UsersCtrl) {
            assert(typeof UsersCtrl !== 'undefined');
        }));

        // it('should have a resource for users', function(){
        //     assert(typeof UsersCtrl !== 'undefined');
        // });
    });
});