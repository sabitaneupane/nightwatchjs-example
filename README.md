# Nightwatch

UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

***

### Selenium WebDriver standalone server
Nightwatch works with the Selenium standalone server so the first thing you need to do is download the selenium server jar file `selenium-server-standalone-2.x.x.jar` from the Selenium releases page:
**https://selenium-release.storage.googleapis.com/index.html**


### Install Selenium and start the server.

```sh
$ npm install selenium-standalone@latest -g
$ selenium-standalone install
$ selenium-standalone start
```

### Install Nightwatch

Install Node.js and then:
```sh
$ git clone https://github.com/nightwatchjs/nightwatch.git
$ cd nightwatch
$ npm install
```

### Run tests
The tests for Nightwatch are written using [Mocha](http://mochajs.org/) exports interface so they can also be run with Nightwatch itself.

To run the unit tests using mocha, do:

```sh
$ npm test
```

To run the unit tests using Nightwatch, do:

```sh
$ npm run unit-tests
```

To check test coverage, run the command:

```sh
$ npm run mocha-coverage
```
and then open the generate file _coverage.html_ in your browser.

### Discuss
The [Mailing List/Google Group](https://groups.google.com/forum/#!forum/nightwatchjs) is the most appropriate tool for Nightwatch related discussions. In addition, there is a [StackOverflow Nightwatch.js tag](http://stackoverflow.com/questions/tagged/nightwatch.js) at your disposal and [Twitter](https://twitter.com/nightwatchjs).

### Setup Guides
Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup). 
Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).

