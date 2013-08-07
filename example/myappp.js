if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to myappp.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      Template.loginForm.show(function(pincode){
      if (typeof console !== 'undefined')
        console.log("The pincode is ",pincode);
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
