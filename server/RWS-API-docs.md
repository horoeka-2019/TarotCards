### Rider-Waite-Smith Tarot Card API Documentation

The examples on the github page for this API are pretty good (https://github.com/ekelen/tarot-api), but I'll make my own just to clarify some things. Also on that git repo there's a file called "YAML documentation", which has a more thorough breakdown of all the routes you can use to make requests to this API.


## The API URL

https://rws-cards-api.herokuapp.com/api/v1

This will be configured in server.js, which will mean api.js will have very simple routes which specify some parameters for the request.
We will probably only be using /cards/random, which you can use to draw a number of unique random cards from the deck of 78.
This number is 1 by default, but if you wrote a request to api/v1/cards/random/n=3, you would get a response with the information of 3 cards.


## The response object

The response object from the api is in json, and has 2 properties. These properties are "cards", which has an array of objects (each of which is a card), and "nhits", which has a number stored in it equal to the length of the "cards" array.

If you made a request which (either randomly or specifically) returned "The Magician" card, the object would look like this:

```js
{
  "nhits": 1,
  "cards": [
    {
      "type": "major",
      "name_short": "ar01",
      "name": "The Magician",
      "value": "1",
      "value_int": 1,
      "meaning_up": "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
      "meaning_rev": "Physician, Magus, mental disease, disgrace, disquiet.",
      "desc": "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."
    }
  ]
}
```


The only properties of any concern to us are "name", "meaning_up", "meaning_rev", "desc", and "name_short".
Notice the snake_case of the property names when writing the functions which use the response object.

If you're wondering, we will use name_short to render the images from the public folder by use of string interpolation, as I had to download the images manually after discovering that the API did not provide them, and the names of the files happen to exactly match the name_short property returned by the api. 

Based on how external API's worked in the Async redux stories, no parsing of the JSON object will be necessary.

## Gotchas
- Properties in the response object are in snake_case
- The response object has a cards property which you will need to access to get to the array of cards.
