module.exports = {
    'Clicking the searched content' : function(browser){
        browser 
            .setValue('#search' ,' Automation testing')
            .click('#search-icon-legacy')
            .pause(2000);
    }
  };
