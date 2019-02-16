# WebDriverIOFrameWork

## Creating a new WebDriveIOFramework

### Nodejs Version
I've found that the latest version of Nodejs has issues installing and generating the wdio.conf.js -- the version I'm using for this project is Nodejs [8.12.0].

### 1. Create a package.json file 
> npm init

### 2. Add WebDriverIO Dependencies
* Documentation can be found here [WebDriverIO].
* Version 4.13.2 is used -- @latest version has known issues with sync and recognizing init()
> npm install -save-dev webdriverio@^4.13.2

### 3. Add Mocha Dependencies
* Documentation can be found here [Mocha].
> npm install -save-dev mocha@latest

### 4. Add Selenium Standalone Server Dependencies
* Requires Java 8 or greater [Install Java]

> npm install -save-dev selenium-standalone@latest
 
> cd ./node_modules/.bin

> selenium-standalone install

### 5. Confirm Selenium Standalone Server installed Correctly
> cd ./node_modules/.bin

> selenium-standalone start

In the browser, navigate to [open this URL] -- It is your local host running on port 4444

### 6. Run Test Case
Make sure selenium-standalone is running. It can be started by openning your command line from the node_modules/.bin folder and executing

Running Test Cases requires the following command:
> npm test

> npm test -- --logLevel=verbose

[8.12.0]: http://nodejs.org/dist/v8.12.0/
[WebDriverIO]: https://www.npmjs.com/package/@shackijj/webdriverio
[Mocha]: https://www.npmjs.com/package/mocha
[Install Java]: https://www.java.com/en/download/help/download_options.xml
[open this URL]: http://127.0.0.1:4444/wd/hub/static/resource/hub.html