## Node.js + ES6/ES7 + async/await + Flow + hot reloading

#### Node.js boilerplate supporting:
* ES6/ES7 
	* [babel-preset-es2015-node5](https://github.com/alekseykulikov/babel-preset-es2015-node5)
	* [babel-preset-stage-0](https://www.npmjs.com/package/babel-preset-stage-0)
* async/await
	* [babel-plugin-syntax-async-functions](https://www.npmjs.com/package/babel-plugin-syntax-async-functions)
	* [babel-plugin-transform-async-to-generator](https://www.npmjs.com/package/babel-plugin-transform-async-to-generator)
* [Flow](https://flowtype.org/)
	* [babel-plugin-transform-flow-strip-types](https://www.npmjs.com/package/babel-plugin-transform-flow-strip-types)
* hot reloading 
	* [nodemon](https://github.com/remy/nodemon)

## Installation

#### Clone repository

```
git clone https://github.com/jakub-gawlas/boilerplate-nodejs-flow-hot-reloading.git
cd boilerplate-nodejs-flow-hot-reloading
```
#### Install dependencies

```
yarn
``` 
or
```
npm install
``` 

## Usage

#### Only Node.js
```
npm start
```

#### With Flow
```
npm run develop
```

#### With Flow + hot reloading
```
npm run hot-reload
```

## Tadam!
![](http://i.imgur.com/CF1f3uJ.png)