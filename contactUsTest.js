var webdriverio = require('webdriverio')
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(function(title){
        console.log('Title is: ' + title);
    
})
.end();