# panda_pitch_fe

## Requirements

To run this project, you will only need Node.js on your environement.
You can use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.14.2

    $ npm --version
    6.4.1

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/Reactongraph/apollo-client-react
    $ cd panda_pitch_fe
    $ npm install

#### or

    $ yarn

## Start & watch

    $ yarn start

#### or

    $ npm start

## Simple build for production

    $ npm run build

#### or

    $ yarn run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

## .gitignore

A gitignore file specifies intentionally untracked files that Git should ignore.

- node_modules
- package-lock.json
- eslintrc
- build

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [ESLINT](https://eslint.org/) is used to prevent JavaScript and JSX error.
- [React](http://facebook.github.io/react) is used for UI.
- [react-router-dom](https://reacttraining.com/react-router/) is used create Dynamic Routes.
- [react-redux](https://redux.js.org/) is a predictable state container for JavaScript apps.

### CSS

- [cssnext](http://cssnext.putaindecode.io) is used to write futureproof CSS for CSS vendor prefix under the hood).

