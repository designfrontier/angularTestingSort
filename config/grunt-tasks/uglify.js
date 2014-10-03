module.exports.tasks = {
  "uglify": {
    "options": {
      "mangle": false
    },
    "app": {
      "files": {
        "build/app.js": [
          "lib/angular/angular.js",
          "lib/angular/angular-resource.js",
          "lib/angular/angular-route.js",
          "lib/angular/angular-mocks.js",
          "build/generated/**/*.js"
        ]
      }
    }
  }
};