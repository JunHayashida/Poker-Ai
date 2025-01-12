import concurrent.futures
import requests
import time
import unittest
from flask_testing import TestCase
from flask import Flask
import json

# Assuming that your server.py file is in the same directory
from server import app

class ServerTest(TestCase):
    def create_app(self):
        return app

    def test_all_possible_hands(self):
        # Define the set of all possible card values
        card_values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        # Define the set of all possible positions
        positions = ['Early', 'Middle', 'Late']

        # Define the min bet
        min_bets = range(1, 6)

        # Iterate over all possible pairs of card values, both suited and unsuited
        for are_suited in [False, True]:
            for i in range(len(card_values)):
                for j in range(i + 1, len(card_values)):
                    # Iterate over all possible positions
                    for position in positions:
                        # Iterate over all possible minimum bets
                        for min_bet in min_bets:
                            # Define a test case
                            test_case = {
                                'player_name': 'Player 1',
                                'card1_value': card_values[i],
                                'card2_value': card_values[j],
                                'are_suited': are_suited,
                                'position': position,
                                'min_bet': min_bet
                            }

                            # Send a request to the server
                            response = self.client.post('/get_optimal_action', data=json.dumps(test_case), content_type='application/json')

                            # Check that the response has the correct status code
                            self.assertEqual(response.status_code, 200)

                            # Load the response data
                            data = json.loads(response.data)

                            # Check that the response data contains the expected fields
                            self.assertIn('optimal_action', data)

                            # Check that the optimal action is one of the possible actions
                            self.assertIn(data['optimal_action'], ['FOLD', 'CALL', 'RAISE'])

# def performance_test():
#     # Define the set of all possible card values
#     card_values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

#     # Define the set of all possible positions
#     positions = ['Early', 'Middle', 'Late']

#     # Define the min bet
#     min_bet = 5

#     # The URL of your server
#     url = 'http://localhost:5000/get_optimal_action'

#     def send_request(card1_value, card2_value, are_suited, position):
#         # Define a test case
#         test_case = {
#             'player_name': 'Player 1',
#             'card1_value': card1_value,
#             'card2_value': card2_value,
#             'are_suited': are_suited,
#             'position': position,
#             'min_bet': min_bet
#         }

#         # Send a request to the server
#         response = requests.post(url, json=test_case)

#         return response

#     start_time = time.time()

#     # Use a ThreadPoolExecutor to send many requests at once
#     with concurrent.futures.ThreadPoolExecutor(max_workers=50) as executor:
#         futures = []
        
#         # Iterate over all possible pairs of card values, both suited and unsuited
#         for are_suited in [False, True]:
#             for i in range(len(card_values)):
#                 for j in range(i + 1, len(card_values)):
#                     # Iterate over all possible positions
#                     for position in positions:
#                         # Schedule a call to send_request and add the resulting Future to a list
#                         futures.append(executor.submit(send_request, card_values[i], card_values[j], are_suited, position))
        
#         # Wait for all futures to complete
#         for future in concurrent.futures.as_completed(futures):
#             response = future.result()
#             if response.status_code != 200:
#                 print(f"Failed request with status code: {response.status_code}")
#                 print(f"Response: {response.text}")
#             assert response.status_code == 200

#     end_time = time.time()
#     print(f'Total time for {len(futures)} requests: {end_time - start_time} seconds')

if __name__ == '__main__':
    unittest.main(exit=False)
    performance_test()

if __name__ == '__main__':
    unittest.main(exit=False)
    performance_test()
