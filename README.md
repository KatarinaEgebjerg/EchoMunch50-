# EchoMunch50-

### Requirements

- Node.js and npm

### Getting started

If you just want to see the project click [here](https://echo-munch50.vercel.app/login)

If you want to continue developing the project run the following command on your local environment:

```
git clone https://github.com/KatarinaEgebjerg/EchoMunch50-.git
cd EchoMunch50-
npm install
```

Open http://localhost:8100 with your favorite browser to see the website. For your information, it might take some time for it to compile the project for your first time.

Then, you can run locally in development mode with live reload:

```
ionic serve
```

### For the backend

Before you can run the server you need to make sure the port in `/models/index.js` is the same as your local SQL-database. You also need to make a file called `.env.local` and write `SERCRET="YOUR-PASSWORD"` in the backend `root directory`

To run the bacend server. You need to run the following commands from your frontend project:

```
cd backend
npm install
npm run server
```

### Practical guidelines

- When starting create your own branch from Master
- Name the branch with meaningful name starting with "feature/" f.ex feature/create-footer
- Create a draft pull request with your new branch
- When pushing your work, do so in small chunks which are relevant for a particular feature you are working on, this way the code is easier to review
