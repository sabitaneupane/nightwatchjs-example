module.exports = {
    'Loading youtube': function (browser) {
      browser
        .url("http://www.youtube.com/")
        .pause(2000)
    },
    'Searching nightwatch in youtube': function (browser) {
        browser
          .setValue('#search' , "Nightwatch js")
          .pause(2000)
          .keys(browser.Keys.ENTER)
          .pause(2000)
          .end()
      }
  };