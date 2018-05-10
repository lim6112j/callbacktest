const callback = require('./index.js');

var callme = function(message) {
    if ( message ) {
        console.log(message);
    }
    else {
        console.log("I've been called!");
    }
}

callback.callthis(callme);  
callback.callthis_withthis(callme, "This is an important message");  