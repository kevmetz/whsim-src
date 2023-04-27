# Deployment

...from github create a new repo...
..from project folder delete any hidden git folder...

git init
git remote add origin https://github.com/kevmetz/killer-kones-demo.git
npm i gh-pages

add to scripts section in package.json:
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

add under project name at top of package.json
    "homepage": "https://kevmetz.github.io/killer-kones-demo",

in App.js change <BrowserRouter> to <HashRouter>

npm run deploy

...wait for published message then check github...
...from github goto repo, settings, pages (left tab menu)...



