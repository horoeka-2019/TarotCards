# Reducers

## Navigation
The navigate reducer changes the state of the visible components: ***Tarot.jsx and Reading.jsx*** according to the action recieved. 
If the store has ***tarot*** the tarot component should be rendered.

## userChoice
The userChoice reducer changes the state from empty to the user's selection from the dropdown menu in the ***Tarot.jsx*** component.
The ***userChoice*** will be used in the Prediction component.

## waiting
The waiting reducer changes the state of ***loading*** to true or false.
REQUEST_READING changes the state to true and RECEIVE_READING and SHOW_ERROR changes the state to false.