module.exports = {
    'Searching nightwatch in youtube': function (browser) {
      //accessing global variable
      var data = browser.globals;

      browser
        .url(data.url.base)
        .pause(2000)
        .setValue('#search' , data.search.value)
        .pause(2000)
        .keys(browser.Keys.ENTER)
        .pause(2000)
    },
    after: function (browser) {
      browser
        .end();
    }
  };