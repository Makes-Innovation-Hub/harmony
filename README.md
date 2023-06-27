# 🎶 Harmony

Harmony is a music app that showcases the top 10 songs in Hebrew and the top 10 songs in Arabic, relevant to the current time.<br>
By clicking on a song's title, users can access its lyrics/artist as well as its translation into the other language.

### Project Link:

https://harmony.test.test/

### Project Frontend Technologies:

☑ React<br>
☑ Rtk + Rtk query<br>
☑ React Router<br>
☑ Openai Api<br>
☑ Spotify Api<br>

### Project Backend Technologies:

☑ Node.js<br>
☑ Mongodb<br>
☑ Express.js<br>
☑ Pino<br>
☑ Mocha<br>
☑ Cheerio<br>
☑ Puppeteer<br>

### Screenshots

![Alt text](/client/src/assets/harmonySH.png)

### Deployment

In order to run the app locally you will need to install all the dependencies from the package.json file buy the following command:<br>
`npm i` in the root folder in the server folder and in the client folder.
in order to navigate between folder enter the command:<br>
`cd server` for example.

In Order to config all env files in the application please enter the following command:<br>
In the client folder:<br>

1. `cd ..` to navigate to root folder.<br>
2. `npm run  generate-env-client`
3. PORT = 5000 || 3000 or the port you prefer.
4. BASE URL = http://localhost || any base url you prefer.

In the server folder:<br>

1. `cd server` to navigate to server folder.<br>
2. `npm run  generate-env-client`
3. PORT = 5000 || 3000 or the port you prefer.
4. BASE URL = http://localhost || any base url you prefer.

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
