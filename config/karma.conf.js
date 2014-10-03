module.exports = function (config) {
    'use strict';

    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            'public/javascripts/lib/angular/angular.min.js',
            'public/javascripts/lib/angular-mocks/angular-mocks.js',
            'public/javascripts/lib/angular-route/angular-route.min.js',
            'public/javascripts/lib/angular-resource/angular-resource.min.js',
            'public/javascripts/lib/sjcl/sjcl.js',
            'public/javascripts/lib/localforage/dist/localforage.min.js',
            'public/javascripts/app.js',

            'public/javascripts/component/**/*.js'
        ],

        reporters: ['spec'],

        port: 9876,
        colors: true,
        autoWatch: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']
    });
};
