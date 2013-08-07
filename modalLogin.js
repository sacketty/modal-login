PinObject={};
_nbDigits=4;
_login=undefined;
Template.loginForm.digits = function() {
  var digits = []
  for(var i=0;i<_nbDigits; i++){
    digits.push("digit"+i)
  }
  return digits;
}
Template.loginForm.rendered = function(){
  _login = $(this.find('#loginModal'));
  //clear the form
  _login.on('shown', function(){
    var input = _login.find('input').first();
    input.focus();
    input.click()
  });
};

///
/// MAIN SINGLE PUBLIC METHOS
///

// Shows the modal login window (on the client side).
//
// A login method is a method which on success calls `this.setUserId(id)` on
// the server and returns an object with fields 'id' (containing the user id)
// and 'token' (containing a resume token).
//
// Callback: Will be called after the modal window is closed and
//           argument is the actual pincode entered
//
Template.loginForm.show = function(callback){
  _callback = callback || function(){return ""};
  if(typeof(_login) === 'undefined') {
    console.error("loginForm template missing on this page....");
    return;
  }
//  _login = $(this.find('#loginModal'));
  _login.modal('show');
};

Template.loginForm.events({
  'keypress' : function (e) {
    var code = e.keyCode;
    if(code <48 || code > 57) return e.preventDefault()
    PinObject[e.target.name] = String.fromCharCode(code);
    setTimeout(function(){
      e.target.value = "0";
    },500);
    var next = $(e.target).next();
    if(next.length > 0) {
      next.focus();
    } else {
      var arr=[];
      //ensure PinObject keys in ascendant order
      for(var i=0; i < _nbDigits; i++){
        var key = "digit"+i;
        arr.push(PinObject[key]);
      }
      _callback(arr.join(''));
      setTimeout(function(){
        _login.modal('hide');
        _login.find('form')[0].reset();
        PinObject={};
      }, 500);
    }
  },
  'keyup' : function (event) {
    // template data, if any, is available in 'this'
      if(event.keyCode==8) {
        var target = $(event.target).prev();
        target.val('');
        target.focus();
      }
  }
});

