# Notes backend

My first fullstack project ever. Live [here](https://level-one-notes.herokuapp.com/).
You know how when you play an RPG game, you're high level but you still
reminisce the time when you were level 3, had some wooden sword for gear
and you kept killing slimes and bats?

This is why I don't want to improve this project. I want it to stay this way,
in all it's lack of user account creation, styling or logout button to remind me
of the old me.

## Things I learned
* React Hooks
* Node/Express
* The importance of testing
* MongoDB with mongoose
* JSON Web Token for authentication
* Password salting for protection against rainbow table attacks
* How to deploy a project on Heroku

## Instructions

For security and maintenance reasons I kept the ability
to create a new user out of the frontend. To create users
you can always hit the `GET /api/users` endpoint.

The credentials I allow on the frontend are the following:
username: superuser
password: superpass
