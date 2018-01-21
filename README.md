<p align="center">
<img src="src/components/puzzle.svg" width="250"/>
<h1>React + Parcel + TypeScript</h1>
</p>

- Forked from [this](https://github.com/emaren84/ts-react-parcel) repository.
- [DEMO](https://yagolopez.js.org/react-parcel/dist/)

## Features

- Zero configuration
- Faster initial build times than Webpack
- Faster sucesive rebuild times than Webpack
- Hot reload supported by default
- Dynamic imports supported by default
- Test configuration using Jest + Enzyme
- File proccessors for Jest (`css|less|jpg|jpeg|png|gif|eot|otf|webp|svg`) etc.
- React + ReactDOM (ver.16)
- Parcel bundler

## Setup

- Clone or download the repository
- If not installed install **yarn** package manager
- Go to project folder and run in command line

```shell
$ yarn
```

## Run

```shell
$ yarn develop
```

Execute the command and you can run & test the application on `localhost:1234` in the browser.

## Build

```shell
$ yarn build
```

The default output directory is `/dist`. You can change the destination wherever you want.

```javascript
// package.json
// ...
"scripts": {
  // ...
  "build": "parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url ./" // <- Change here
}
// ...
```

## Test

```shell
$ yarn test        # run tests suites once
$ yarn test:watch  # watch mode
$ yarn coverage    # code coverage
```

- Config tests in `config` folder

- You have to create `__tests__` directory at the same location of files which you want to test.

- Test file's name should be `SOURCE.test.ts/tsx/js` or `SOURCE.spec.ts/tsx/js`.

  ​

  <p align="center"><a href="#">Back to top :arrow_up:</p>