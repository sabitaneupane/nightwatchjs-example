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



> ### Step 5: Writing test



> ### Step 6: Running the test





### Setup Guides
Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup). 
Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).

