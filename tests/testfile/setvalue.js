module.exports = {
    'Find search input field' : function(browser){
        browser 
            .setValue('#search' , "Nightwatch js")
            .pause(2000);
    }
  };
