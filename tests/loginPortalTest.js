browser
    .url('http://www.webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(function(title){
        console.log('Title is: ' + title);
    
    })