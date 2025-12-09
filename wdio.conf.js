export const config = {
    runner: 'local',

    user: 'oauth-caiopaypal06-2b44e',
    key: '96dec81d-8515-43fa-b48b-8a0aa8384e28',

    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',

    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',

        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Login Test Android',
            deviceOrientation: 'PORTRAIT'
        }
    }],

    logLevel: 'info',
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
