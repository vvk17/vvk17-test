// no transpiling

// Register babel for transpiling before test run
require ('babel-register')();

// Disable webpack features that mocha doesn't understand
require.extensions ['.css'] = function () {};
