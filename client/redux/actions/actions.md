# Actions

## Navigation
The navigate action describes what components should be visible between ***Tarot.jsx and Reading.jsx***
***Input:*** the following inputs will be sent to the reducer. 
Action type is: NAVIGATE
Payload will be: 
1. tarot
2. reading

## UserChoice
The userChoice action describes the selection the user will make when selecting an option from the dropdown menu in the ***Tarot.jsx*** component.
Action type is: CHOICE
Payload will be one of the following:
1. Lovelife
2. Family
3. Career
4. Finance
5. Health

## requestReading
When the request to get readings is sent, the wait indicator will be rendered.
Action type is: REQUEST_READING

## receiveReading
When the reading is received, it will send the action to change the state.
Action type is: RECEIVE_READING
Payload will be: the response received from the API.
