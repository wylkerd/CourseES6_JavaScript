# CourseES6_JavaScript
Course about ECMAScript 6+.  Object-oriented programming(first commit), node, yarn, and more.

#### Requirements: Node.js and Yarn

### Initializing the project. Installation sequence:

- yarn init
- yarn add @babel/cli
- yarn add @babel/preset-env
- yarn add @babel/plugin-proposal-object-rest-spread

#### To create a arq ".babelrc" and add code:
{
    "presets": ["@babel/preset-env"]
}

#### In "package.json" add script:
  "scripts": {
    "dev": "babel ./main.js -o ./bunble.js -w"
  }
  
- yarn add @babel/core

### Execute code with command:
- yarn dev

#### YARN WEBPACK
- yarn add webpack@2.0.10 
- yarn add webpack-cli@4.1.1 -D
##### Babel loader
- yarn add babel-loader -D  OR  yarn add babel-loader@8.0.0-beta.0 -D
##### Webpack Dev server
- yarn add webpack-dev-server -D


