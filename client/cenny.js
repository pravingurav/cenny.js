//BRAID.JS IMPLEMENTATION
var braid={};braid.vnumber=.02;braid.version=function(){console.log(braid.vnumber)};braid.search=function(e,t,n,r){if(n!==undefined){if(n===false){t=t.toLowerCase();e=e.toLowerCase();if(r!==false){t=braid.replace(t,"aeiouyAEIOUY@wa@");e=braid.replace(e,"aeiouyAEIOUY@wa@")}}}var i=[];var t=t.split("");var e=e.split("");var s;var o=0;for(var u=0;u<t.length;u++){if(t[u]===e[0]){for(var a=0;a<e.length;a++){s=u+a;if(t[s]===e[a]){if(a===e.length-1){var f=s-e.length+1;i.push(f);o++}}}}}if(o===0){return false}else{return i}};braid.replace=function(e,t){var n=t;var t={};t.full=n;var r=false,i=false;t.groups=t.full.split("@n@");if(e instanceof Array){var s=[];r=true;for(var o=0;o<e.length;o++){var u=e[o];if(u===parseInt(u)){u=u.toString();i=true}for(var a=0;a<t.groups.length;a++){var f=t.groups[a];var l=braid.search("@wa@",f,true);if(l===false){var c=f.split("@w@");var h=c[0];var p=c[1];u=deiwo3replace(h,p,u)}else{var c=f.split("@wa@");var h=c[0];if(braid.search("!NUM!",h,true)!==false){h="12345678910"}if(braid.search("!VOWEL!",h,true)!==false){h="aeiouyAEIOUY"}if(braid.search("!SPECIAL!",h,true)!==false){h="~`@#$%^&*()_+-={}|[]:;<>"}h=h.split("");var p=c[1];for(var d=0;d<h.length;d++){u=deiwo3replace(h[d],p,u)}}}if(i===true){u=parseInt(u)}s.push(u);i=false}}else{if(e===parseInt(e)){e=e.toString();i=true}for(var a=0;a<t.groups.length;a++){var f=t.groups[a];var l=braid.search("@wa@",f,true);if(l===false){var c=f.split("@w@");var h=c[0];var p=c[1];e=deiwo3replace(h,p,e)}else{var c=f.split("@wa@");var h=c[0];if(braid.search("!NUM!",h,true)!==false){h="12345678910"}if(braid.search("!VOWEL!",h,true)!==false){h="aeiouyAEIOUY"}h=h.split("");var p=c[1];for(var d=0;d<h.length;d++){e=deiwo3replace(h[d],p,e)}}}if(i===true){e=parseInt(e)}}if(r===false){return e}else{return s}};var deiwo3replace=function(e,t,n){return n.replace(new RegExp(e,"g"),t)};braid.help=function(e){if(!e){console.log('Incorrect santex. Make sure to use the first parameter as a keyword. Example: braid.help("braid.replace"). \n|TIP: You can use this function in the console for quick help.')}else{if(braid.search("replace",e,false)!==false){console.log("*SANTEX FOR braid.replace()*\n\n"+"|RETURNS: braid.replace() will return the output after completing actions on the string.\n"+"|SANTEX: var VARIABLE = braid.replace('this is a test','this@w@that@n@is@w@was');\n"+"|OUTPUT: 'that was a test'\n"+"|NOTE: Using the parameter 'key' (second parameter), '@w@' is used as 'with', so 'apple@w@grape' means 'replace apple with grape'.\n"+"| '@n@ is used as 'next.' It is used to seperate instructions, as follows, 'apple@w@grape@n@cherry@w@bannana'.\n"+"| You can use '@wa@' instead of '@w@' to replace all instances of each character with another, like so, 'aeiouy@wa@#'\n"+"| If the string were 'abcdefghijklmnopqrstuvwxyz', this would output '#bcd#fgh#jklmn#pqrst#vwx#z'.\n"+"| *Input can be an Array, Integer, or String.\n")}else if(braid.search("search",e,false)!==false){console.log("*SANTEX FOR braid.search()*\n\n"+"|RETURNS: if braid.search() finds a match to query, it will return the positions of all matches in an array.\n"+"| If it does not find a match, it will return *false*.\n"+"|SANTEX: var VARIABLE = braid.search('query','complete string',false,false);\n"+"|OUTPUT: *false*\n"+"|NOTE: The third (3) parameter should be *true* or *false*, if *true* the search will be case sensitive, if *false* the search will not.\n| Setting this to false will also search by just consonants, instead of both consonants and vowels.\n"+"| The fourth (4) parameter can be set to *false* to disable the removal of vowels when searching with the third (3) parameter equal to *true*.\n")}else{console.log("~No help available on this topic. Please make sure to check your spelling.\nSANTEX: braid.help('braid.complementary'), etc.\n    ")}}}




function Cenny(mainObject) {
	
	//****
		this.user = {};
		this.group = {};
		this.deamon = {};
        this.secure = {};
		this.isOnline = navigator.onLine;
	//****

	this.groupObject = {};
	
	//group stuff
	this.groupObject.group = "default";
	this.groupObject.key = "default";
	
	this.userObject = {};
	
	//user stuff
	this.userObject.user = "default";
	this.userObject.pass = "default";
    this.userObject.read = true; //read access
	
	
	
	
	
	//url to backend
	this.url = document.URL + "cenny.php";
	
	//#######################################################################################################################################################
	//######################################################## SET UP MAIN OBJECT STUFF #####################################################################
	//#######################################################################################################################################################
	if (mainObject instanceof Object) {
		if (mainObject['group'] !== undefined && mainObject['group'] instanceof Array) {
			
			this.groupObject.group = braid.replace(mainObject['group'][0], " @w@");
			this.groupObject.key = braid.replace(mainObject['group'][1], " @w@");
			
		} 
		if (mainObject['user'] !== undefined && mainObject['user'] instanceof Array) {
			
			this.userObject.user = braid.replace(mainObject['user'][0], ' @w@');
			this.userObject.pass = braid.replace(mainObject['user'][1], ' @w@');
			if (mainObject['user'][2] !== undefined) {
                this.userObject.read = mainObject['user'][2];  //read access
            }
		} else {
			
			var x = localStorage['cenny'];
			if (x !== undefined) {
				x = JSON.parse(x);
				if (x['user'] !== undefined) {
					this.userObject.user = x['user'];
					this.userObject.pass = x['pass'];
				}
				
			}
			
		}

		if (mainObject['url'] !== undefined) {
			this.url = mainObject['url'];
		}
	} else {
		console.log("mainObject should be an Object.");
	}
	
	//#######################################################################################################################################################
	//############################################# USED FOR ALL PLUGIN AJAX REQUESTS (& .GET() / .SET())####################################################
    //#######################################################################################################################################################
	
	this.aj = function(sendData, action, callback) {
		
		var xmlhttp;
		xmlhttp=new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var data = xmlhttp.responseText;
				if (callback !== undefined) {
					callback(JSON.parse(data));			  
				}		  
			}
				 
		};
		xmlhttp.open("POST",that.url,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("action=" + action + sendData + "&groupName=" + that.groupObject.group + "&groupKey=" + that.groupObject.key + "&userName=" + that.userObject.user + "&userPass=" + that.userObject.pass + "&userRead=" + that.userObject.read);
	
	};
	
	//#######################################################################################################################################################
	//######################################################### GET DATA FROM BACKEND #######################################################################
	//#######################################################################################################################################################
	
	this.get = function(callback, user) {
        if (user === undefined) {
		that.aj("", "get", callback);
        } else {
        that.aj("&otherUser=" + braid.replace(user, " @w@"), "getOther", callback);
        }
	};
	
	this.set = function(object, callback) {
        if (object instanceof Object) {
            that.aj("&data=" + JSON.stringify(object), "set", callback);
        } else {
            that.aj("&data=" + JSON.stringify({data:object}), "set", callback);
        }
	};
	
	this.update = function(object) {
		that.get(function(d) {
		if (object instanceof Object) {
			
			for (key in object) {
				if (key === "DELETE" && object[key] instanceof Array) {
					for (var i = 0; i < object[key].length; i++) {
						delete d[object[key][i]];
					}
				} else {
					d[key] = object[key];
				}
			}
			
            if (d['error'] !== undefined) {
                if (d['error'] === "user is empty") {
                    delete d['error'];   
                }
            }
			that.set(d);
		
		} else {
			console.log("first parameter of .update() must be an Object.");
		}
		
		});
	
	};
	
	
	//USER STUFF
	
	this.user.remove = function(callback) {
		that.aj("", "removeUser", callback);
		that.userObject.user = "default";
		that.userObject.pass = "default";
	};
	
	
	this.user.remember = function() {
		var x = localStorage['cenny'];
		if (x === undefined) {
			x = {};
		} else {
			x = JSON.parse(x);
		}
		x['user'] = that.userObject.user;
		x['pass'] = that.userObject.pass;
		x = JSON.stringify(x);
		
		localStorage['cenny'] = x;
		
	};
	
	this.user.forget = function() {
		var x = localStorage['cenny'];
		if (x === undefined) {
			x = {};
		} else {
			x = JSON.parse(x);
		}
		delete x['user'];
		delete x['pass'];
		x = JSON.stringify(x);
		
		localStorage['cenny'] = x;
		
	};
	
	this.user.switch = function(mainObject) {
		if (mainObject instanceof Object) {
			if (mainObject['user'] !== undefined && mainObject['user'] instanceof Array) {
				that.userObject.user = braid.replace(mainObject['user'][0], ' @w@');
				that.userObject.pass = braid.replace(mainObject['user'][1], ' @w@');
			}
		} else {
			console.log("mainObject should be an Object.");
		}

	};
    
    this.user.setEmail = function(email, callback) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (filter.test(email) === true) {
            that.aj("&data=" + email, "setEmail", callback); 
        } else {
            if (callback !== undefined){callback("Email invalid.");}else{console.log("email invalid.")}; 
        }
        
    };
    
    this.user.getEmail = function(callback, username) {
        if (username === undefined) {
            that.aj("", "getEmail", callback);
        } else {
            username = braid.replace(username, " @w@");
            that.aj("&getEmailOfUser=" + username, "getOtherEmail", callback); 
        }
    };
	
	
	//END USER STUFF
	
	this.modified = function(callback, pArray) {
		setInterval(function() {
			that.get(function(d){
			var output = {};
				if (pArray !== undefined) {
					for (var i = 0; i < pArray.length; i++) {
						output[pArray[i]] = d[pArray[i]];
					}
				} else {
					output = d;
				}
				
				var vexput = JSON.stringify(output); //for comparing.
				
				if (vexput !== that.deamon.lastData) {
					callback(output);	
					that.deamon.lastData = JSON.stringify(output);
				}
			});
		}, 500);
		
	};
    
    
    //future proofing
    this.secure.genToken = function(callback) {
        
         var token = "";
         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

        for( var i=0; i < 65; i++ )
        token += possible.charAt(Math.floor(Math.random() * possible.length));
        
        that.aj("&data=" + token, "saveToken", callback);
    
    };
    //finish
	
	
    
	var that = this;
	
    //check if client is online.
	setInterval(function() {
        
        if (navigator.onLine) {
            that.isOnline = true;
        } else {
            that.isOnline = false;
        }
        
        
    }, 300);

};