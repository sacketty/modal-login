modal-login
===========

meteor package - A very basic modal pincode prompt window targeting mobile devices -

## Install

Install modal-login from Atmosphere
    
    mrt add modal-login

Install From Git (If you are not using Meteorite)

    mkdir -p packages
    #make sure you created the packages folder
    git submodule add https://github.com/sacketty/modal-login.git packages/modal-login

## Tutorial


 create a new app

	meteor create myapp

add the package

	mtr add modal-login

update `myapp.html` file
 
    //old code
    <body>
		{{> hello}}
	</body>

    //new code
    <body>
		{{> loginForm}}
		{{> hello}}
	</body>

	//optional: add viewport in the <head> for mobile devices
	<head>
		<title>MyApp</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>



update `myapp.js` file

	//old code
	Template.hello.events({
    	'click input' : function () {
      		if (typeof console !== 'undefined')
        		console.log("You pressed the button");
    	}
  	});

	//new code
	Template.hello.events({
    	'click input' : function () {
      		// template data, if any, is available in 'this'
      		Template.loginForm.show(function(pincode){
      			if (typeof console !== 'undefined')
        			console.log("The pincode is ",pincode);
      		})
    	}
  	});

now run the app

	meteor


