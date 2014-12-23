hot-enough-text
===============

Uses Tessel + Twilio to send a text notification when something is hot enough.

I regularly put water on the stove to boil, get distracted, and completely forget to check on it. This project closes the water-boiling loop by sending me a text message when the water is boiling.

This is also easily adaptable to other situations as well– just change the threshold temperature and use it to know when you can put meat on the grill, [salmon in the smokehouse](http://www.instructables.com/id/How-to-Smoke-Salmon/).

I use a thermocouple (not Tessel's climate module) because a thermocouple is versatile, can take high temperatures, and is fine to immerse in water. Tim wrote [a Node library for it](https://www.npmjs.com/package/thermocouple-max31855), so it's not difficult to use one.
