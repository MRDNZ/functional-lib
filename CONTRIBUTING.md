## Development

functional-lib uses the following devDependencies. Instructions on how to use them are linked below.

| Dependency | Documentation |
| ------ | ------ |
| Webpack | [webpack.js.org/](https://webpack.js.org/) |
| Typescript | [typescriptlang.org/](https://www.typescriptlang.org/) |
| Babel | [babeljs.io/](https://babeljs.io/) |
| Karma | [karma-runner.github.io/](https://karma-runner.github.io/) |
| Jasmine | [jasmine.github.io/](https://jasmine.github.io/) |
| Tslint | [palantir.github.io/tslint/](https://palantir.github.io/tslint/) |

Open your favorite Terminal and run these commands get started:
  - `git clone https://github.com/MRDNZ/functional-lib.git`
  - `cd functional-lib`
  - `npm install` / `yarn install`

The code that supports this library can be found in the projects folder `./src`.

##### *NOTE: Clean coding, less is more!*

The tests that can be found in the projects folder `./test`. Use the following command to run the test suites.

```sh
$ npm test
```

To see the examples in action run these commands one after another:

```sh
$ npm run build-prod
$ npm run examples
```

It is also possible to manually run code snippets by using `ts-node` in your terminal or any other code runner in your editor.

---


#### Release new version
To release a new version of the library please make sure you follow these steps strictly!

- Update version in the `package.json` according to [semantic versioning](http://semver.org/).
- Commit changes to repo, this will launch the tests by a pre-commit hook.

##### *NOTE: You can't commit your changes if the tests are not passed succesfully!*

Once the repo is up to date you can publish a new package for npm by running:

```sh
$ npm publish
```

---
