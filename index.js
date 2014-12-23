// Configuration variables
var config = require('./config.json');
var temperature = 212;
var message = 'Temperature ' + temperature + 'ºF reached.';

// Require node modules
console.log('Setting up Twilio...');
var twilio = require('twilio')(config.account_sid, config.auth_token);

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
    } else {
      console.log('Oops! There was an error.', error);
    }
  });
}
