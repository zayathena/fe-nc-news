# NC News Front-End

The NC News Front-End is the user interface for the NC News API project, a news platform where users can read articles, leave comments, vote on articles, and rate individual comments. The front-end interacts with the backend API to display and manage articles, comments, and voting.

The front-end is built with React and Vite. Vite is used as the development build tool for fast and efficient development, providing a lightning-fast hot module replacement and optimised builds for production. Axios is used to make HTTP requests to the backend API, and CSS is used to style the application.

One of the main challenges in this project was ensuring efficient data fetching and state management across different components while keeping the user experience smooth and responsive.

Future features could include user authentication, article filtering by popularity or date, and accessibility improvements.

# Steps to Install 

1. Clone the repository 
   git clone https://github.com/yourusername/nc-news-frontend.git
   cd nc-news-frontend

2. Install dependencies
   npm start

3. Set up the environment variables Create a .env file in the root of the project

4. Run the development server Start the Vite development server:
   npm run dev
This will open the application in your default browser at http://localhost:5173 (or another port if Vite chooses a different one). Vite will automatically reload the page when you make changes to the code.

# How to Use the Project 

Available pages and routes

    Home Page (/)
    Displays a list of articles. Users can filter articles by topics and vote on articles.

    Article Page (/articles/:article_id)
    Displays all articles available.

    Single Article Page (/articles/:article_id)
    Displays a single article and its associated comments. Users can post new comments, vote on the article, and rate comments.

Components:

    ArticleList: Displays a list of articles.
    ArticleCard: Displays a single article.
    Comments: Displays comments associated with a specific article and allows users to post new ones.
    ArticleVotes: Handles upvoting and downvoting for both articles and comments.

# Developed by: Clare Regan
Special thanks to Northcoders for the mentorship and guidance.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.

