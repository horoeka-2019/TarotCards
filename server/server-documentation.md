## server.js

- serves static files from the public directory
- uses tarot.js for routes at /api/v1

## tarot.js 
 - consumes external tarot api hosted on heroku
 - returns either a 500 error, or a json object with one random card. 