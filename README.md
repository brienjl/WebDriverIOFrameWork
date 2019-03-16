# WebDriverIOFrameWork

## Creating a new WebDriveIOFramework

### Nodejs Version

I've found that the latest version of Nodejs has issues installing and generating the wdio.conf.js -- the version I'm using for this project is Nodejs [8.12.0].

### Initial Install

* First, Install the project dependencies from package.json

> npm install

* Second, make sure Java 8 or above is installed (see section 7 for link). Once Java is installed, you can use the selenium standalone server. Install with the following commands.

> npm install -save-dev selenium-standalone@latest
>
> cd ./node_modules
>
> ./.bin/selenium-standalone install

* Third, ensure the selenium-standalone server is working correctly with the following:

> cd ./node_modules
>
> ./.bin/selenium-standalone start

* In the browser, navigate to [open this URL] -- It is your local host running on port 4444

### 1. WebDriverIO Dependencies

* Documentation can be found here [WebDriverIO].
* Version 4.13.2 is used -- @latest version has known issues with sync and recognizing init()

### 2. Mocha Dependencies

* Documentation can be found here [Mocha].

### 3 Add Chai Dependencies

* Documentation can be found here [Chai].

### 4. JSON Server Dependencies

* JSON Server allows us to quickly mock an api with test data [JSON]

* The following command can be run to spin up the json server. It will automatically create a db.json with mock data if it doesn't already exist. Feel free to add test data here.

> json-server --watch db.json

### 6. RobotJS Dependencies

* I added the RobotJS framework because sometimes you just need simple mouse and keyboard control [RobotJS]

### 7. Selenium Standalone Server Dependencies

* Requires Java 8 or greater [Java]

### Running Test Cases

Running Test Cases requires the following command:

> npm test -- --spec=tests/webdriverUniversity.js

[8.12.0]: http://nodejs.org/dist/v8.12.0/
[WebDriverIO]: https://www.npmjs.com/package/@shackijj/webdriverio
[Mocha]: https://www.npmjs.com/package/mocha
[Chai]: https://www.npmjs.com/package/chai
[JSON]: https://github.com/typicode/json-server
[RobotJS]: https://github.com/octalmage/robotjs
[Java]: https://www.java.com/en/download/help/download_options.xml
[open this URL]: http://127.0.0.1:4444/wd/hub/static/resource/hub.html