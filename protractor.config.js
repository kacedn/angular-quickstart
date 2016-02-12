/**
 * Created by nka on 12/02/2016.
 */
exports.config = {
    allScriptsTimeout: 11000,
    specs: [],
    capabilities: {
        'browserName':'chrome'
    },
    baseUrl: 'http://localhost:4000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 3000
    }
};