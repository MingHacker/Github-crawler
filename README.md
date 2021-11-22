# Github crawler

This is an app that takes data from GitHub's API and stores it in the database (mongoDB). 

When a user types in a GitHub username and submits the form:

- Send a POST request to the express server
- Server GET that user's repos from GitHub's API
- Server saves the repos to the database

When a user visits / refreshes the page:

- GET the top 25 repos in the express server's database
- Take those repos and display them on the page



