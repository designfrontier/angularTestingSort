angular.module('lfeApp').factory('SecurityService', function(){
    var security = {
            key : ''
            , token : ''
            , isLocked : {value: true}
            , authTime : null
            , tractors : 'Tractors is so dumb - Tow Mater'
            , pinAttempts : 0
        };

    return {
        //keep this in the simple hand off security service
        getEncryptionKey: function(){
            return security.key;
        }

        , isItLocked: function(){            
            return security.isLocked.value;
        }

        , userActivity: function(){
            security.authTime = new Date();
        }
 
        , hasPin: function() {
            return security.key !== '';
        }

        , generateTempKey: function () {
            //DO NOT USE THIS IN PRODUCTION EVER. DELETE IT
            security.key = 'I even remain alone to write the sad tale of the destruction of my people';
        }
    };
});