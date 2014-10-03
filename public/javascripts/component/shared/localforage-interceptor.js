//IMPORTANT: If you are not using encryption with localstroage of data
//  you need to make the change mentioned on the next line and one at the end of the document
//  uncomment this next line
// $provide.factory('localStorageWithEncryption', function($q) {
//  AND comment out or delete the line after this comment
angular.module('lfeApp').config(['$provide', '$httpProvider', function ($provide, $httpProvider) {

    $provide.factory('localStorageWithEncryption', ['$q', 'SecurityService', function($q, SecurityService) {
    //localize some library files for later
    var localforage = window.localforage
      , crypto = window.sjcl

      , encrypt = function (dataIn) {
            //To use encryption you must have included the Stanford Javascript Crypto Library
            //  http://crypto.stanford.edu/sjcl/
            //  and have an encryption key stored in the security service
            //  how you get it there and what you use is your business
            //  we just need it to be there before your first request.
            var key;

            if(typeof crypto !== 'undefined'){
                //we have an encryption library!
                //get the key!
                key = SecurityService.getEncryptionKey();

                //we need to stringify the data before we can encrypt it
                //  then encrypt it with the key and return the encrypted object
                return crypto.encrypt(key, JSON.stringify(dataIn));
            } else {
                //no encryption library present so pass data through
                return dataIn;
            }
      }

      , decrypt = function (dataIn) {
            var key;

            if(typeof crypto !== 'undefined'){
                //we have an encryption library!
                //get the key!
                key = SecurityService.getEncryptionKey();

                //we need to stringify the data after we decrypt it
                //  so decrypt it with the key and return the decrypted object
                return JSON.parse(crypto.decrypt(key, dataIn));
            } else {
                //no encryption library present so pass data through
                return dataIn;
            }
      }

      , getItemFromLocal = function(path) {
          // gets an item from local based on url
          var rtn = $q.defer()
              , pathArray = path.split('/')
              , i = 0
              , poppedArray = []
              , promiseArray = []

              , traverserFunction = function(traverseArray){
                  var pathArray = traverseArray
                    , returnPromise = rtn
                    , i = 0
                    , currentObj = {}
                    , broken = false;

                  return function (docIn) {
                      currentObj = docIn;

                      if (docIn !== null) {
                          //we found a document!
                          //  Now to check and see if we have a variable that corresponds to the item
                          for (i = 0; i < pathArray.length; i++) {
                              if(typeof currentObj === 'object' && typeof currentObj[pathArray[i]] !== 'undefined') {
                                  currentObj = currentObj[pathArray[i]];
                              } else if (i < pathArray.length - 1) {
                                //couldn't find the object we were looking for...
                                broken = true;
                                break;
                              }
                          }

                          if (broken) {
                              this.resolve(undefined); //is this where the promise lives??
                          } else {
                              this.resolve(currentObj);
                          }
                      }
                  };
              };

          //we need to traverse the url in reverse... to see if we have the item
          localforage.getItem(path).then(function(doc){
              if(doc !== null){
                  //we have a document... return that thing
                  //pass it through the decrypt function in case it is encrypted
                  //  and then resolve the promise with the value
                  rtn.resolve(decrypt(doc));
              } else {
                  //well... time to start digging through this thing
                  for(i = pathArray.length; i > 0; i--){
                    //work from the right to the left

                    //pop off the last element and join everything else
                    //  to create the next path to try
                    // save the popped parts somewhere for traversing the object
                    poppedArray.push(pathArray.pop());

                    promiseArray.push(localforage.getItem(pathArray.join('/')).then(traverserFunction(poppedArray)));
                  }
              }
          });

          $q.all(promiseArray).then(function (arrayIn) {
              var localArr = arrayIn
                , i = 0;

              //this needs to be the check for an item not being found at all
              for (i = 0; i < localArr.length; i++) {
                  if ( typeof localArr[i] !== 'undefined' ) {
                      //this is the valid return object
                      //  resolve the promise with it and we are done here
                      rtn.resolve(localArr[i]);
                  } else {
                      //no valid object found locally head to the server

                  }
              }
          });

          //probably needs to return a promise that we resolve out...
          return rtn.promise;
      }

      , setItemInLocal = function (dataIn) {
          //this function is for caching data into local storage if it hasn't
          //  been put there already, or if it has been updated in some way

          //save this thing to localstorage
          //  use the url to save it...?

          //return the data as received from the server
          return dataIn;
      };

    return {
      // optional method
      'request': function(config) {
        // do something on success

        var item = getItemFromLocal(config.url);

        item.then(function(doc){
          console.log(doc);
        });
        // console.log(config);
        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise;
        }
        return $q.reject(rejection);
      },



      // optional method
      'response': function(response) {
        // do something on success
        return response;
      },

      // optional method
     'responseError': function(rejection) {
        // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise;
        }
        return $q.reject(rejection);
      }
    };
  //IMPORTANT: if you are not using the encryption part of this thing
  //  comment out the next line
  }]);
  //  and uncomment the one after this
  // });
  
  $httpProvider.interceptors.push('localStorageWithEncryption');
}]);