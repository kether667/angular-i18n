module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //globalize cultures
            {pattern: 'bower_components/angular/angular.js', included: true, watched: false},
            {pattern: 'bower_components/angular-sanitize/angular-sanitize.js', included: true, watched: false},
            {pattern: 'bower_components/angular-mocks/angular-mocks.js', included: true, watched: false},

            {pattern: 'bower_components/globalize/lib/globalize.js', included: true, watched: false},
            {pattern: 'bower_components/globalize/lib/cultures/*.js', included: true, watched: false},

            //sources
            'dist/angular-globalize-it.js',

            //specs
            'src/**/*Spec.js'
        ],

        preprocessors: {
            'src/app.js': 'coverage',
            'src/services/*.js': 'coverage',
            'src/filters/*.js': 'coverage',
            'src/directives/*.js': 'coverage'
        },

        // list of files to exclude
        exclude: [

        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],
        //reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
