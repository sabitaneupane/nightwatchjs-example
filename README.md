# Nightwatch

UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

***

### Selenium WebDriver standalone server
Nightwatch works with the Selenium standalone server so the first thing you need to do is download the selenium server jar file `selenium-server-standalone-2.x.x.jar` from the Selenium releases page:
**https://selenium-release.storage.googleapis.com/index.html**


### Install Selenium and start the server.

```
$ npm install selenium-standalone@latest -g
$ selenium-standalone install
$ selenium-standalone start
```

### Install Nightwatch

Install Node.js and then:
```
$ git clone https://github.com/nightwatchjs/nightwatch.git
$ cd nightwatch
$ npm install
```

or just install it globally.

```
 npm install nightwatch -g
```


### Run tests
The tests for Nightwatch are written using [Mocha](http://mochajs.org/) exports interface so they can also be run with Nightwatch itself.

or to you can run the tests:

```
$ nightwatch -t tests/main.js 
```


### Setup Guides
Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup). 
Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).

