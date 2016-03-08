# github-issue-tracker

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## How it works?

This is an AngularJS project.

Users can send request as a public repository URL on Github, for example https://github.com/Shippable/support/

The main controller `app/controller/main.js` would handle the user's request and display the results using Github service

The Github service `app/services/github.js` would be responsible for consumption of Github API v3

## How the solution can be improved if given more time?
1. Inclusion of middleware / backend for improving GitHub API consumption and business logic processing.
2. End to end, test driven development approach, everything should have test cases.
3. Creating an AngularJS directive each item of issue tracking results
4. Adding authentication to consumption of Github API, so that the API would be available at higher rate limit.