# CourseES6_JavaScript
Course about ECMAScript 6+.  Object-oriented programming(first commit), node, yarn, and more.

#### Requirements: Node.js and Yarn

### Initializing the project. Installation sequence:

- yarn init
- yarn add @babel/cli
- yarn add @babel/preset-env

#### To create a arq ".babelrc" and add code:
{
    "presets": ["@babel/preset-env"]
}

#### In "package.json" add script:
  "scripts": {
    "dev": "babel ./main.js -o ./bunble.js -w"
  }
  
- yarn add @babel/core
- yarn dev


