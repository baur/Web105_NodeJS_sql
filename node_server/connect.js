var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database
var config = {
 server: "localhost",
    // If you're on Windows Azure, you will need this:
    authentication: {
      type: "default",
      options: {  
        userName: "nodeuser",
        password: "3214",
        database: "nodejs",
      }
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});