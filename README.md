# Nightwatch

UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

***

### Selenium WebDriver standalone server
Nightwatch works with the Selenium standalone server so the first thing you need to do is download the selenium server jar file `selenium-server-standalone-2.x.x.jar` from the Selenium releases page:
**https://selenium-release.storage.googleapis.com/index.html**


***

> ### Step 1: Installing Selenium standalone server.

Nightwatch works with the Selenium standalone server so at first we need to download the selenium standalone server.
Prerequisite: make sure you have JDK installed.

```
$ npm install selenium-standalone@latest -g
```

To run selenium standalone server

```
$ selenium-standalone start
```


> ### Step 2: Installing Chrome driver / geckodriver

We want to run our test on Chrome, Safari, and Firefox, so we must also install their respective drivers and this driver will be used by Selenium to control the browsers.

```
$ brew install geckodriver
```

or

```
$ npm install chromedriver --save-dev
```


> ### Step 3: Installing Nightwatch

Nightwatch.js is an easier way to write tests that running them using Selenium. To install it, cd into your project, and then install the module from npm to your dev-dependencies:

```
$ git clone https://github.com/nightwatchjs/nightwatch.git
$ cd nightwatch
$ npm install
```


> ### Step 4: Adding Configuration file into nightwatch project

The test runner of expects a configuration file to be passed and the basic Nightwatch configuration happens through a json configuration file — nightwatch.json. Let’s create a nightwatch.json file, and fill it with:

```
{
  “src_folders” : [“tests”],
  “output_folder” : “reports”,
  
  “selenium” : {
      “start_process” : true,
      “server_path” : “./bin/selenium-server-standalone-3.3.1.jar”,
      “log_path” : “”,
      “port” : 4444,
      “cli_args” : {
          “webdriver.chrome.driver” : “./bin/chromedriver”
       }
   },
  “test_settings” : {
      “default” : {
      “launch_url” : “http://localhost",
      “selenium_port” : 4444,
      “selenium_host” : “localhost”,
      “desiredCapabilities”: {
            “browserName”: “chrome”,
            “javascriptEnabled”: true,
            “acceptSslCerts”: true
      }
    }
  }
}
```

> ### Step 5: Writing test

We have now installed Nightwatch, standalone Selenium server, and also driver for browsers. With all of these steps, now we are ready with all the tools to create end-to-end tests.

Let’s add a new file in the tests folder, called main.js.


```
module.exports = {
  'Searching nightwatch in youtube': function (browser) {
    browser
      .url("http://www.youtube.com/")
      .pause(2000)
      .setValue('#search' , "Nightwatch js")
      .pause(2000)
      .keys(browser.Keys.ENTER)
      .pause(2000)
  },
  after: function (browser) {
    browser
      .end();
  }
};
```


> ### Step 6: Running the test

To run your test, in your terminal do the command which will run the test file main.js.

```
$ nightwatch -t tests/main.js
```



### Setup Guides
Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup). 
Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).

