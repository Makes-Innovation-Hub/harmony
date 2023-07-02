<p align="center"><img width=60% src="./client/src/assets/harmonySH2.png"></p>
<p align="center">
Harmony is a music app that showcases the top 10 songs in Hebrew and the top 10 songs in Arabic, relevant to the current time.
By clicking on a song's title, users can access its lyrics/artist as well as its translation into the other language.
</p>

### Project Link:

https://harmony.test.test/

### Project Frontend Technologies:

- React<br>
- Redux Toolkit & Rtk query<br>
- React Router<br>

### Project Backend Technologies:

- Node.js<br>
- Mongodb<br>
- Express.js<br>
- Pino<br>
- Mocha<br>
- Cheerio<br>
- Puppeteer<br>
- Openai Api<br>
- Spotify Api<br>

### Screenshots

![Alt text](/client/src/assets/harmonySH.png)

### Local installation

```
git clone https://github.com/Makes-Innovation-Hub/harmony.git
```

After you clone the folder to your computer please open the folder with Vs code and then open your terminal in your Vs code.

In order to run the app locally you will need to install all the dependencies by the following command:<br>

```
npm run installAll
```

In order to config all env files in the client please enter the following command:<br>

```
npm run generate-env-client
```

```
PORT = 5000 || 3000 or the port you prefer.
```

```
VITE_SERVER_BASE_URL = http://localhost || any base url you prefer.
```

In order to config all env files in the server please enter the following command:<br>

```
cd server
```

```
npm run config
```

```
PORT = 5000 || 3000 or the port you prefer
```

```
NODE_ENV = development || production
```

```
MONGO_URI_DEV = explanation below
MONGO_URI_PROD = explanation below
OPEN_AI_API_KEY = explanation below
SPOTIFY_CLIENT_ID = explanation below
SPOTIFY_CLIENT_SECRET = explanation below
```

## Mongo DB setup

- sign in to mongodb website: https://www.mongodb.com/
  ![צילום מסך 2023-06-26 ב-11 56 44](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/205524f2-3e84-4de6-857e-87e113aef288)
- press "+ New Project" button
  ![צילום מסך 2023-06-26 ב-11 59 10](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/07033b0d-bf7a-4894-8407-4ea7b160e4c1)
- give project name
  ![צילום מסך 2023-06-26 ב-12 02 23](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/d76cb2ae-1380-4c07-b3fc-dd21cea54b6a)
- press "Next" button
- press "Create Project" button
  ![צילום מסך 2023-06-26 ב-12 05 43](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/42c2d9e9-50cd-41f7-8210-891064e3e9b6)
- press "Add Current IP Address" button
  ![צילום מסך 2023-06-26 ב-12 06 48](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/c6bd10bd-f777-4b24-8eb6-ee4fd7b53cf0)
- press green "+ Create" button
  ![צילום מסך 2023-06-26 ב-13 01 48](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/29c2bae6-53d9-4af8-a5dc-0f33b86262d2)
- check M0 free option
  ![צילום מסך 2023-06-26 ב-12 09 56](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/3ff5bddf-07be-47a4-8519-109f0c5610e4)
- check aws
  ![צילום מסך 2023-06-26 ב-12 11 57](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/164929c2-609a-43ff-ad38-aae4e0209867)
- pick closest region
  ![צילום מסך 2023-06-26 ב-12 13 33](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/dff983d7-6f9e-4e67-9b68-a3702d900c86)
- give cluster development name
  ![צילום מסך 2023-06-26 ב-12 14 49](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/52ef9c3c-aee7-4481-bd28-b2371c8c24fe)
- press green "Create" button
  ![צילום מסך 2023-06-26 ב-12 15 58](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/f510800a-caa7-4d22-98ba-c8a4f3afbbe6)
- check "Username and Password"
  ![צילום מסך 2023-06-26 ב-12 18 25](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/dee59938-2005-4d7d-912c-6d480f53ad14)
- give Username and Password
  ![צילום מסך 2023-06-26 ב-12 19 39](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/8e8124d5-9cda-4b60-8e87-bda08950acd9)
- press green "Create User" button
  ![צילום מסך 2023-06-26 ב-12 20 52](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/0a07864c-1ffe-4db8-a3ab-83b6493d5e11)
- check "Cloud Environment"
  ![צילום מסך 2023-06-26 ב-12 24 02](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/76367e81-c4f8-4e43-bc0d-40b330c65839)
- IP Address: 0.0.0.0/0
- Description: open for all
  ![צילום מסך 2023-06-26 ב-12 27 18](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/6d23ff1a-013a-4dd0-9373-9f8efc96f54d)
- press "Add Entry" button
  ![צילום מסך 2023-06-26 ב-12 28 51](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/21bf3534-38d9-45b4-be1e-a645661c7558)
- press "Finish and Close" button
  ![צילום מסך 2023-06-26 ב-12 32 04](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/bce1a1e9-fd79-498e-9982-1752f2a3dade)
- press "Build a Database" button
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src//assets/create_db_.png)
- press "Connect" button
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/connect_db.png)
- choose "Drives"
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/drviers.db.png)
- goto "Add your connection string into your application code" and copy it, inside it enter the password you choose from previous step above.
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/mongo_uri.png)

  this lone string will be your MONGO_URI_DEV & MONGO_URI_PROD

## Open AI setup

- open ai website: https://openai.com/
- goto menu
  ![צילום מסך 2023-06-26 ב-12 35 32](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/147a8f55-f0ec-4777-951c-79c165d47f43)
- goto Log in
  ![צילום מסך 2023-06-26 ב-12 49 14](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/478cbaa7-41fe-4fb2-8695-4ea5f98708ac)
- press API box
  ![צילום מסך 2023-06-26 ב-12 38 21](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/d2a8afc1-8ac4-4b2a-8c61-708b87901dc5)
- upper menu right side, press "Personal"
  ![צילום מסך 2023-06-26 ב-12 39 33](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/3da1f623-c923-49f5-9ce4-3a334230e352)
- press "View API keys"
  ![צילום מסך 2023-06-26 ב-12 50 32](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/8b55566b-621f-4abe-a401-7ee79a4ce294)
- press "+ Create new secret key" button
  ![צילום מסך 2023-06-26 ב-12 44 29](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/13a95b31-3424-40c6-8062-5f826fee3df5)

## Spotify setup

- open spotify website for developer: https://developer.spotify.com/
- goto login and log to spotify with the platform you prefer (email/facebook etc..)
- press on the Dashboarded in the username button in the right top corner.
  ![צילום מסך 2023-06-26 ב-13 08 22](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20133950.png)
- press "Create App"

  ![צילום מסך 2023-06-26 ב-13 10 07](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134252.png)

- Enter your details inside the form and press save
  ![צילום מסך 2023-06-26 ב-13 11 32](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134437.png)
- choose "Settings" button

  ![צילום מסך 2023-06-26 ב-13 12 42](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134650.png)

- There you can find your Spotify client ID & Spotify client secret
  ![צילום מסך 2023-06-26 ב-13 13 44](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134823.png)

## Run the application by the following command

In the client folder:<br>

```
1. cd client
2. npm run dev
```

In the server folder:<br>

```
1. cd server
2. nodemon server.js
```
