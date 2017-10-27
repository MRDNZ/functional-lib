
# functional-lib

![Version](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Version](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)
![Version](https://img.shields.io/badge/release-v1.0.1-blue.svg)

Functional Javascript library with Typescript support. You can use this library to solve the most common problems you're facing while developing.

Some of the functional solutions are:
- map
- curry
- compose
- and many many more...

We've also created our own awesome ~~*(functional)*~~ helpers like a:
- Switch `(switch case on steroids)`
- more are comming...

##### *NOTE: This package can be used as a standalone library and is completely independent of other packages*

---

## Installation

You can install this library with one of the following commands depending on the package manager you are using.


```sh
$ npm install --save-dev functional-lib
```
```sh
$ yarn add --dev functional-lib
```

---

## Usage
You can find all the code examples in the projects folder `./examples`.

Some quick functional solution examples:
```typescript
import { map } from 'functional-lib';

interface IUser{
  firstname:string;
  lastname:string;
}

const users:IUser[] = [
  {
    firstname: 'Manuela',
    lastname: 'Joyce',
  },
  {
    firstname: 'Maritza',
    lastname: 'Mathews',
  },
  {
    firstname: 'Jodi',
    lastname: 'Gilliam',
  }
];

const mapUsername = (user:IUser) => `${user.firstname} ${user.lastname}`;
const names:string[] = map(users, mapUsername);

// names = ['Manuela Joyce', 'Maritza Mathews', 'Jodi Gilliam']
```

```typescript
import { curry } from 'functional-lib';

const add = (x:number, y:number) => x + y;

const curriedAdd = curry(add);
curriedAdd(1, 2); // 3

const addOne = curriedAdd(1);
addOne(2); // 3
```

Some quick awesome helper examples:
```typescript
import { Switch } from 'functional-lib';

const switchCase = new Switch(3)
  .case(() => 9 / 3)
    .do((switchClass:Switch) => {
      switchClass.parse('case 3 value');
    })
  .case(2)
    .do((switchClass) => {
      switchClass.pipe('case 2 value');
    })
  .else((parse) => {
    parse('fallback value');
  });

switchCase.value // 'case 3 value'
```

---
## Contribution
> If you're missing out on things or have some great idea's,
> please come up with suggestions so we can make this library even more
> *AWESOME!* Or help us out by contributing.

Please read our [Contribution Guide](https://github.com/MRDNZ/functional-lib/blob/master/CONTRIBUTING.md) for more information about development.

---


License: ISC

##### *Free Software, Hell Yeah!*
