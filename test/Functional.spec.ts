import {
  users, IUser,
  books, IBook,
  IBookDetail,
  reviews, IReviewDetail,
} from '../public/data';

import * as Functional from '../src';


describe('log', () => {
  const log = Functional.log;

  it('can execute console methods', () => {
    const consoleMethods = ['clear', 'error', 'group', 'info', 'log', 'warn'];

    consoleMethods.forEach((method:any) => {
      spyOn(console, method);
      log(method, 'lorem ipsum');
      expect(console[method]).toHaveBeenCalledWith('lorem ipsum');
    });
  });
});


describe('forEach', () => {
  const forEach = Functional.forEach;
  const items:string[] = ['item1', 'item2'];

  it('loops over each item in an array', () => {
    forEach(items, (item:string, index:number) =>
      expect(item).toBe(items[index]));
  });

  it('executes callback for each item in array', () => {
    const callback = jasmine.createSpy('callback');

    forEach(items, (item:string, index:number) => {
      callback(item);
      expect(callback).toHaveBeenCalledWith(items[index]);
    });
  });
});


describe('forEachObject', () => {
  const forEachObject = Functional.forEachObject;
  const properties:Object = { attribute1: 'value1', attribute2: 'value2' };

  it('loops over each item in an object', () => {
    forEachObject(properties, (attribute:string, value:any) =>
      expect(value).toBe(properties[attribute]));
  });

  it('executes callback for each item in object', () => {
    const callback = jasmine.createSpy('callback');

    forEachObject(properties, (attribute:string, value:any) => {
      callback(value);
      expect(callback).toHaveBeenCalledWith(properties[attribute]);
    });
  });
});


describe('unless', () => {
  const unless = Functional.unless;

  it('skips callback if statement is true', () => {
    const status:string = 'not_allowed';
    const callback = jasmine.createSpy('callback');

    unless(status === 'not_allowed', () => callback(status));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('executes callback if statement is false', () => {
    const status:string = 'allowed';
    const callback = jasmine.createSpy('callback');

    unless(status === 'not_allowed', () => callback(status));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});


describe('every', () => {
  const every = Functional.every;

  it('executes one callback for all items in array', () => {
    const numbers = [1,2,3];
    const callback = jasmine.createSpy('callback');

    every(numbers, (number:number) => callback(number));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('returns true if every item equals callback', () => {
    const notNumbers = [NaN, NaN, NaN];
    const allNumbers = every(notNumbers, isNaN);

    expect(allNumbers).toBe(true);
  });

  it('returns false if not every item equals callback', () => {
    const someNumbers = [1, 2, NaN];
    const allNumbers = every(someNumbers, isNaN);

    expect(allNumbers).toBe(false);
  });
});


describe('some', () => {
  const some = Functional.some;

  it('executes callback for each item in array', () => {
    const numbers = [1,2,3];
    const callback = jasmine.createSpy('callback');

    some(numbers, (number:number) => callback(number));
    expect(callback).toHaveBeenCalledTimes(numbers.length);
  });

  it('returns true if some item equals callback', () => {
    const someNumbers = [1, 2, NaN];
    const someNaNs = some(someNumbers, isNaN);

    expect(someNaNs).toBe(true);
  });

  it('returns false if not even one item equals callback', () => {
    const allNumbers = [1, 2, 1];
    const someNaNs = some(allNumbers, isNaN);

    expect(someNaNs).toBe(false);
  });
});


describe('sortBy', () => {
  const sortBy = Functional.sortBy;

  it('sort array by object attribute on DESC order', () => {
    const firstWithA = users.filter((user:IUser) =>
      user.lastname.toLowerCase().charAt(0) === 'a')[0];

    const sortedOnLastname:IUser[] = users.sort(sortBy('lastname'));
    const firstUser = sortedOnLastname[0];

    expect(firstUser).toBe(firstWithA);
  });

  it('sort array by object attribute on ASC order', () => {
    const lastWithA = users.filter((user:IUser) =>
      user.lastname.toLowerCase().charAt(0) === 'a')[0];

    const sortedOnLastname:IUser[] = users.sort(sortBy('lastname', 'ASC'));
    const lastUser = sortedOnLastname[sortedOnLastname.length - 1];

    expect(lastUser).toBe(lastWithA);
  });
});


describe('closure', () => {
  const closure = Functional.closure;

  it('has access to outer function variables', () => {
    const outerVariable = 'someValue';
    const closureFn:Function = closure(outerVariable);

    closureFn((value:string) => expect(value).toBe(outerVariable));
  });
});


describe('once', () => {
  const once = Functional.once;

  it('executes function only once', () => {
    const callback = jasmine.createSpy('callback');
    const onlyOnce:Function = once((...args:any[]) => callback(...args));

    onlyOnce('firstOne', 'executes function');
    onlyOnce('secondOne', 'doesn\'t execute function');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});


describe('factorial', () => {
  const factorial = Functional.factorial;

  it('returns factorial of given number', () => {
    const factorialOfSix = factorial(6);
    const factorialOfFour = factorial(4);

    expect(factorialOfSix).toBe(720);
    expect(factorialOfFour).toBe(24);
  });
});


describe('memoized', () => {
  const memoized = Functional.memoized;
  const factorial = Functional.factorial;
  const memoizedFactorial = memoized(factorial);

  it('returns output of the given function', () => {
    const factorialOutput = factorial(10);
    const memoizedFactorialOutput = memoizedFactorial(10);

    expect(memoizedFactorialOutput).toBe(factorialOutput);
  });
});


describe('random', () => {
  const random = Functional.random;

  it('returns a random item from the given array', () => {
    const randomUser = random(users);
    expect(users).toContain(randomUser);
  });
});


describe('map', () => {
  const map = Functional.map;
  const random = Functional.random;

  it('returns a new array with the results of the given function', () => {
    const username = (user:IUser) => `${user.firstname} ${user.lastname}`;
    const names:string[] = map(users, username);
    const randomUsername = username(random(users));

    expect(names).toContain(randomUsername);
    expect(names).toEqual(users.map(username));
  });
});


describe('filter', () => {
  const filter = Functional.filter;

  it('returns a new array with all elements that equals callback', () => {
    const age = (user:IUser) => user.age > 20 && user.age <= 24;
    const ages:IUser[] = filter(users, age);

    ages.forEach((age) => {
      expect(age).not.toBeLessThanOrEqual(20);
      expect(age).not.toBeGreaterThan(24);
    });
  });
});


describe('reduce', () => {
  const reduce = Functional.reduce;

  it('reduce array to a single value', () => {
    const add = (acc:number, val:number) => acc + val;
    const numbers:number[] = [0, 1, 2, 3, 4, 5, 6];
    const reduced = reduce(numbers, add);

    expect(reduced).toEqual([0 + 1 + 2 + 3 + 4 + 5 + 6]);
  });
});


describe('concatAll', () => {
  const concatAll = Functional.concatAll;

  it('flattens two dimensional array', () => {
    const bookDetails2D = books.map((book:IBook) => book.bookDetails);
    const bookDetails1D = concatAll(bookDetails2D);

    bookDetails2D.forEach(bookDetail => expect(bookDetail).toEqual(jasmine.any(Array)));
    bookDetails1D.forEach(bookDetail => expect(bookDetail).toEqual(jasmine.any(Object)));
  });
});


describe('zip', () => {
  const zip = Functional.zip;
  const concatAll = Functional.concatAll;

  it('merges 2 arrays into 1 array', () => {
    const merge = (detail:IBookDetail, review:IReviewDetail) => detail.id === review.id
      ? Object.assign({}, detail, { reviews: review.reviews }) : undefined;

    const bookDetails = concatAll(books.map(book => book.bookDetails));
    const mergedBookDetails = zip(bookDetails, reviews, merge);

    mergedBookDetails.forEach((bookDetail) => {
      expect(bookDetail.reviews).toEqual(jasmine.any(Array));
    });
  });
});


describe('curry', () => {
  const curry = Functional.curry;

  it('reduce functions of more than one argument to functions of one argument', () => {
    const add = (x:number, y:number) => x + y;
    const outcome = add(1,2);

    const curriedAdd = curry(add);
    const curriedOutcome = curriedAdd(1,2);
    expect(curriedOutcome).toEqual(outcome);

    const addOne = curriedAdd(1);
    const addOneOutcome = addOne(2);
    expect(addOneOutcome).toEqual(outcome);
  });

  it('throws an error if no function is provided', () => {
    const errorMessage = 'No function prodived';
    expect(curry).toThrowError(errorMessage);
  });
});

describe('partial', () => {
  const partial = Functional.partial;

  it('creates a function of the remaining arguments', () => {
    const delay = 1000;
    const delayFn = partial(setTimeout, undefined, delay);
    const callback = jasmine.createSpy('callback');

    delayFn(() => callback());
    setTimeout(() => expect(callback).toHaveBeenCalled(), delay);
  });
});


describe('compose', () => {
  const compose = Functional.compose;

  it('output of the inner function becomes the input of the outer function', () => {
    const number = compose(Math.round, parseFloat);
    const [outcome] = number('2.36');

    expect(outcome).toBe(2);
  });
});


describe('pipe', () => {
  const pipe = Functional.pipe;

  it('composes functions the other way around', () => {
    const number = pipe(parseFloat, Math.round);
    const [outcome] = number('2.36');

    expect(outcome).toBe(2);
  });
});


describe('identity', () => {
  const identity = Functional.identity;

  it('logs the passed in argument and returns it', () => {
    spyOn(console, 'log');
    const arg = 'something';
    const newArg = identity(arg);

    expect(console.log).toHaveBeenCalledWith(arg);
    expect(newArg).toBe(arg);
  });
});


describe('isFunction', () => {
  const isFunction = Functional.isFunction;

  it('returns a boolean', () => {
    const realFunction = () => {};
    const fakeFunction = '';

    expect(isFunction(fakeFunction)).toBeFalsy();
    expect(isFunction(realFunction)).toBeTruthy();
  });
});


describe('Divider', () => {
  const log = Functional.log;
  const Divider = Functional.Divider;

  it('creates a new divider for the log function', () => {
    const newDivider = new Divider({ char: 'x', amount: 10 });
    spyOn(console, 'log');
    log('log', newDivider);

    expect(console.log).toHaveBeenCalledWith('xxxxxxxxxx');
  });
});
