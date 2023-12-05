import requests
import pytest

def test_make_api_call():
    # Mocking the response for testing purposes
    expected_response = {"document_id": 123, "document_title": "Sample Listing", 
                         "document_content": "Sample Content", "document_address": "Sample Address"}
    # Mock the requests.post method
    def mock_post(*args, **kwargs):
        class MockResponse:
            def __init__(self, json_data, status_code):
                self.json_data = json_data
                self.status_code = status_code

            def json(self):
                return self.json_data

        return MockResponse(expected_response, 200)

    # Monkeypatch the requests.post method
    requests.post = mock_post

    # Test the function with a mock user input
    user_input = "house in front of beach"
    response_data = make_api_call(user_input)

    assert response_data == expected_response
