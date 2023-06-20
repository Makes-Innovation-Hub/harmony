# harmony


## dev checklist:
### before development:
- [ ] open a new branch for each feature.
- [ ] name the branch with a similar name to the issue/task you are working on.
for example - issue “15 add new header to login page”, branch: “15-new-header-login”

### during development
- [ ] measure your work time per task.
- [ ] files should not be longer than ~80 lines.
- [ ] use good naming for files, functions and variables
- [ ] make sure that everything is positioned logically - you expect to find fileX inside folder Y, or function A definition inside file B.
commit and push often.
- [ ] make sure you can always answer the question: how much of your task is done (40%, 80% etc)
- [ ] frontend: check on different screen sizes that your design in not breaking

### before PR:
- [ ] make sure to remove any commented out code and unneeded comments.
- [ ] remove all console.log
- [ ] change screen size to make sure that frontend design is not breaking
- [ ] go over the task definition again and make sure you did everything.
- [ ] pull from main/dev and resolve merge conflicts
- [ ] before sending the PR in github, go over the code in the PR and make sure there are no weird stuff that don’t belong there.


## How to connect to MongoDB and run the server locally 
- in harmony repository, go to '/harmony/server/config' and create a 'config.env' file.
- the 'config.env' file should contain the development environment, the port (on which the server runs locally) and the Mongo URI for each one of the development environments, as following:
    NODE_ENV=development or NODE_ENV=production
    PORT=5000
    MONGO_URI_DEV=mongodb+srv://<your username>:<your password>@harmony.btro83c.mongodb.net/
    MONGO_URI_PROD=mongodb+srv://<your username>:<your password>@harmony.abcd12e.mongodb.net/
- to run the server, write one of the following commands in the terminal:
    1. To start the server normally: node server.js
    2. To run with nodemon, make sure you have nodemon installed and run: npm run server.js

