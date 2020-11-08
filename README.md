# MENTOR.ME

Mentor.me is a real-time scheduling web app built on the MERN stack.

## Installation

The easiest way to get the app up and running is with docker:

```bash
docker-compose up (in the root folder of the project)
```

If you don't go this route, you'll have to install mongo locally, seed it with the test data and start it up. Then run the following commands from the root folder of the project:

```bash
npm install
npm run server
npm run client
```

## Usage

Take a look at db/users.js to see the users that already exist in the database. You can sign in using any of those with the email as the username and "asdf1234" as the password. Or create a new user and add the existing users as contacts to see their availability and schedule meetings.
