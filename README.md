# Poker-Ai
Poker


## Files
poker.py: This is the main file that contains the logic of the poker game and the poker bot. The PokerFlop class represents a game of poker, and the Player class represents a player in the game. The PokerFlop class includes methods for calculating the strength of a hand and determining the optimal action for a player. The Player class includes methods for setting a player's hand and position.

server.py: This file sets up a Flask web server that serves as the interface between the poker bot and the players. The server receives HTTP requests from the players, passes the relevant information to the poker bot, and sends back the bot's decisions as HTTP responses.

## Running the server
```
pip install flask
```

To run the server using the Flask run command, you'll need to set the FLASK_APP environment variable to point to the server.py file and then run the flask run command.

If you're using a Unix or Mac OS system, you can do this with the following commands:

```
export FLASK_APP=server.py
flask run
```

Windows:
```
set FLASK_APP=server.py
flask run
```

These commands will start the server running on localhost port 5000.



### Playing a game
To play a game, send a POST request to the /get_optimal_action route of the server. The request should include a JSON body with the following fields:

player_name: A string representing the name of the player.
card1_value: A string representing the rank of the first card in the player's hand (2-10, J, Q, K, A).
card2_value: A string representing the rank of the second card in the player's hand (2-10, J, Q, K, A).
are_suited: A boolean indicating whether the two cards in the player's hand are of the same suit.
position: A string representing the player's position in the betting order ("Early", "Middle", "Late").
min_bet: A numerical value representing the minimum bet.
The server will respond with a JSON object that includes the following fields:

game_state: An object representing the state of the game, including the player's chips, hand, action, and position.
optimal_action: A string representing the optimal action for the player ("FOLD", "CALL", "RAISE").





# React native ui(macOs guide)

## Prequisites
Ensure you have this:
- Node.js
- Xcode(macOS)

## Install these stuff to use dropdown box and checkbox

```
npm install --save react-native-material-dropdown
```

```
npx expo install expo-checkbox
```









