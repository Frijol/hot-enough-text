hot-enough-text
===============

Uses Tessel + Twilio to send a text notification when something is hot enough.

I regularly put water on the stove to boil, get distracted, and completely forget to check on it. This project closes the water-boiling loop by sending me a text message when the water is boiling.

This is also easily adaptable to other situations as well– just change the threshold temperature and use it to know when you can put meat on the grill, [salmon in the smokehouse](http://www.instructables.com/id/How-to-Smoke-Salmon/).

I use a thermocouple (not Tessel's climate module) because a thermocouple is versatile, can take high temperatures, and is fine to immerse in water. Tim wrote [a Node library for it](https://www.npmjs.com/package/thermocouple-max31855), so it's not difficult to use one.

## Materials

* [Tessel](//tessel.io)
* [Thermocouple Amplifier MAX31855 breakout board](http://www.adafruit.com/product/269)
* [Thermocouple](http://www.adafruit.com/products/270)

## Hardware setup

1. Assemble the thermocouple and thermocouple amplifier according to [Adafruit's instructions](https://learn.adafruit.com/thermocouple/wiring-the-thermocouple)
1. Connect the thermocouple amplifier to Tessel. It talks over [SPI](https://github.com/tessel/docs/blob/master/tutorials/communication-protocols.md#spi), so we need to connect chip select, clock, and data, as well as power and ground. From the thermocouple amplifier to Tessel's GPIO bank:
  * Vin > 3.3V (power)
  * 3Vo > nothing, we don't need this one
  * GND > GND (ground)
  * DO > MOSI (this is data from the thermocouple coming in to Tessel)
  * CS > TX/G1 (chip select– we're using a digital GPIO pin to tell the amplifier when we're talking to it)
  * CLK > SCK (different names for the clock pin)
1. Put the end of the thermocouple in the thing you're heating up.

## Software setup

1. Set up your Twilio account ([it's free!](https://www.twilio.com/try-twilio))
1. [Install your Tessel](start.tessel.io)

## Run instructions

1. Clone this repo
1. Set up your config.json file based on the example-config.json file
1. Run `npm install` to install Node dependencies
1. In `index.js`, set your temperature threshold
1. [Connect Tessel to the internet](http://start.tessel.io/wifi)
1. Run the code on Tessel: `tessel run index.js`
