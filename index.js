// Configuration variables
var config = require('./config.json');
var temperature = 212; // I'm  working in Fahrenheit
var message = 'Temperature ' + temperature + 'ºF reached.';

// Set up hardware
var tessel = require('tessel');
var thermocouplelib = require('thermocouple-max31855');
var sensor = thermocouplelib.use(tessel.port['GPIO'], {
  cs: 0,
  poll: 10
});

// Require node modules
console.log('Setting up Twilio...');
var twilio = require('twilio')(config.account_sid, config.auth_token);

// Check the temperature
sensor.on('measurement', function (data) {
  console.log(data);
  // Make sure this is a valid reading
  if(!data.openCircuit) {
    // If reading is high enough
    if (data.fahrenheit >= temperature) {
      // Send the text
      sendText();
    }
  }
});

function sendText() {
  console.log('Sending text...');
  twilio.sms.messages.create({
    to: config.num_to_text,
    from: config.twilio_num,
    body: message
  }, function(error, message) {
    if (!error) {
      console.log('Success! The SID for this SMS message is:');
      console.log(message.sid);
      console.log('Message sent on:');
      console.log(message.dateCreated);
      // Stop listening
      process.exit();
    } else {
      console.log('Oops! There was an error.', error);
    }
  });
}
