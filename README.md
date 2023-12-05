# Airbnb Recommendation System

This project is an Airbnb recommendation system that utilizes collaborative filtering, content-based filtering, and K-nearest neighbors (KNN) algorithms to provide personalized recommendations to users based on various criteria such as preferences, location, duration of stay, ratings, and pricing.

## Features

- **User Prompt Recommendations**: Users can input prompts like "house in front of beach" or other specific preferences to get tailored recommendations.
- **Personalized Recommendations**: Recommendations are personalized based on user preferences, including location, duration of stay, ratings, and price range.
- **Collaborative Filtering**: Utilizes collaborative filtering techniques to recommend listings based on similar user behavior and preferences.
- **Content-Based Filtering**: Recommends listings by analyzing listing attributes (such as location, amenities, property type) matching user preferences.
- **KNN Algorithm**: Implements K-nearest neighbors algorithm to find similarities between listings and offer recommendations accordingly.

## Installation

To run the Airbnb recommendation system locally:

1. Clone this repository.
2. Install the required dependencies using `pip install -r requirements.txt`.
3. Run the application using `python app.py`.
4. Access the system through the provided interface or API endpoints.

## Usage

### User Prompt Recommendations

1. Input your specific prompt or preference, e.g., "house in front of the beach".
2. Receive tailored recommendations based on the prompt provided.

### Personalized Recommendations

1. Set your preferences, including location, duration of stay, ratings, and price range.
2. Get personalized recommendations based on the specified criteria.

## How It Works

### Collaborative Filtering

- Collaborative filtering analyzes user behavior and preferences to recommend listings similar to those liked or chosen by users with similar tastes.

### Content-Based Filtering

- Content-based filtering matches listing attributes with user preferences, recommending listings with similar attributes to those preferred by the user.

### KNN Algorithm

- The K-nearest neighbors algorithm identifies similarities between listings and recommends those with the closest attributes to the user's preferences.

## Contributing

Contributions are welcome! If you have ideas for improvements or bug fixes, please feel free to open an issue or submit a pull request.

## Credits

This project was developed by [Team Chekathon]. Contributors include [Shazzad Hossain](https://github.com/shazzad5709), [Rupali Tasnim Samad](https://github.com/labonnya), [Mehzabin Haque](https://github.com/mehzabin-haque)
