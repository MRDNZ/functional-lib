import { users, IUser, books, IBook, IBookDetail, reviews, IReviewDetail } from './data';
import {
 forEach,
 forEachObject,
 log,
 unless,
 every,
 some,
 sortBy,
 closure,
 once,
 memoized,
 factorial,
 map,
 filter,
 reduce,
 concatAll,
 zip,
 curry,
 partial,
 compose,
 Divider,
} from '../../lib';


const items:string[] = ['item1', 'item2'];
forEach(items, (item:any) => log('log', item));


const properties:Object = { attribute1: 'value1', attribute2: 'value2' };
forEachObject(properties, (attribute:string, value:any) => log('log', attribute, value));


let status:string = 'not_allowed';
unless(status === 'not_allowed', () => log('log', 'not_allowed'));

status = 'allowed';
unless(status === 'not_allowed', () => log('log', 'allowed'));


const allNumbers:boolean = every([NaN, NaN, NaN], isNaN);
log('log', 'every isNaN', allNumbers);


const someNumbers:boolean = some([1, 2, NaN], isNaN);
log('log', 'some isNaN', someNumbers);


const sortedOnLastname:IUser[] = users.sort(sortBy('lastname'));
log('log', 'sort on lastname', sortedOnLastname);


const closureFn:Function = closure('someValue');
closureFn((value:string) => log('log', 'closureFn', value));


const onlyOnce:Function = once((...args:any[]) => log('log', 'onlyOnce', ...args));
onlyOnce('firstOne', 'executes function');
onlyOnce('secondOne', 'doesn\'t execute function');


const cached:Function = memoized(factorial);
log('log', 'cached factorial', cached(6));
log('log', 'cached factorial', cached(4));


const names:string[] = map(users, (user:IUser) => `${user.firstname} ${user.lastname}`);
log('log', 'map names', names);


const ages:IUser[] = filter(users, (user:IUser) => user.age > 20 && user.age <= 24);
log('log', 'filter ages', ages);


const numbers:number[] = [1,2,3,4,5,6];
const reduceAdd = reduce(numbers, (acc:number, val:number) => acc + val);
log('log', 'reduce add', reduceAdd);


const bookDetails = concatAll(map(books, (book:IBook) => book.bookDetails));
log('log', 'bookDetails', bookDetails);


const mergedBookDetails = zip(bookDetails, reviews, (detail:IBookDetail, review:IReviewDetail) =>
  detail.id === review.id ? Object.assign({}, detail, { reviews: review.reviews }) : undefined);
log('log', 'zip bookDetails and reviews', mergedBookDetails);


const add = (x:number, y:number) => x + y;

const curriedAdd = curry(add);
log('log', 'curried add', curriedAdd(1, 2));

const addOne = curriedAdd(1);
log('log', 'curried addOne', addOne(2));


const match = curry((expr:RegExp, str:string) => str.match(expr));
const hasNumber = match(/[0-9]+/);

type CustomFilter = (value:any, index:number, array:any[]) => any;
const customFilter = curry((fn:CustomFilter, arr:any[]) => arr.filter(fn));

const findNumbersInArray = customFilter(hasNumber);
log('log', 'find numbers in array', findNumbersInArray(['advanced', 'curry', 'example3']));


const delayTime = 1000;
const delayFn = partial(setTimeout, undefined, delayTime);
delayFn(() => log('log', 'partial application delayFn'));


const number = compose(Math.round, parseFloat);
log('log', 'number compose', number('2.36'));


const splitIntoSpaces = (str:string) => str.split(' ');
const count = (arr:any[]) => arr.length;

const countWords = compose(count, splitIntoSpaces);
log('log', 'countWords compose', countWords('It\'s the final countdown'));


const filterGoodBooks = (bookDetail:IBookDetail) => bookDetail.rating[0] > 4.5;
const mapAuthor = (bookDetail:IBookDetail) => ({ author: bookDetail.author });

const goodBooksQuery = partial(filter, undefined, filterGoodBooks);
const authorPresenter = partial(map, undefined, mapAuthor);

const goodBooksAuthor = compose(authorPresenter, goodBooksQuery);
log('log', 'author for good books', goodBooksAuthor(mergedBookDetails));


const newDivider = new Divider({ char: 'x', amount: 50 });
log('log', 'newDivider', newDivider);
