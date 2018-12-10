module.exports = {
    'Find search input field' : function(browser){
        browser 
            .setValue('#search' , "Nightwatch")
            .pause(2000);
    }
  };