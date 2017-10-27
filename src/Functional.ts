export const forEach = (arr:any[], fn:Function):void => {
  for (const index in arr) fn(arr[index], index);
};

export const forEachObject = (obj:Object, fn:Function):void => {
  for (const property in obj) fn(property, obj[property]);
};

export const unless = (predicate:boolean, fn:Function):(boolean|any) => predicate || fn();

export const every = (arr:any[], fn:Function):boolean => {
  let result:boolean = true;
  for (const value of arr) result = result && fn(value);
  return result;
};

export const some = (arr:any[], fn:Function):boolean => {
  let result:boolean = false;
  for (const value of arr) result = result || fn(value);
  return result;
};

export const sortBy = (property:string, order?:string):((a:Object, b:Object) => number) =>
  (a:Object, b:Object):number => order === 'ASC'
    ? (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0
    : (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

export const closure = (variable:string):Function =>
  (fn:Function):any => fn(variable);

export const once = (fn:Function):Function => {
  let done:boolean = false;
  return function (...args:any[]):any {
    return done ? undefined : ((done = true), fn.apply(this, args));
  };
};

export const factorial = (n:number):number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

export const memoized = (fn:Function):any => {
  const storeObj = {};
  return (arg:any) => storeObj[arg] || (storeObj[arg] = fn(arg));
};

export const random = (arr:any[]):any => arr[Math.floor(Math.random() * arr.length)];

export const map = (arr:any[], fn:Function):any[] => {
  const results:any[] = [];
  for (const value of arr) results.push(fn(value));
  return results;
};

export const filter = (arr:any[], fn:Function):any[] => {
  const results:any[] = [];
  for (const value of arr) (fn(value)) ? results.push(value) : undefined;
  return results;
};

export const concatAll = (arr:any[]):any[] => {
  const results:any[] = [];
  for (const value of arr) results.push.apply(results, value);
  return results;
};

export const reduce = (arr:any[], fn:Function, initial?:any):any => {
  let acc:any = initial !== undefined ? initial : arr[0];
  for (const value of arr) acc = fn(acc, value);
  return [acc];
};

export const zip = (leftArr:any[], rightArr:any[], fn:Function):any[] => {
  const results:any[] = [];
  for (let i = 0; i < Math.min(leftArr.length, rightArr.length); i++)
    results.push(fn(leftArr[i], rightArr[i]));
  return results;
};

export const curry = (fn:Function):Function => {
  if (!isFunction(fn)) throw Error('No function provided');
  return function curriedFn(...args:any[]):(Function|any) {
    if (args.length < fn.length) {
      return function ():any {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
};

export const partial = (fn:Function, ...partialArgs:any[]):Function => {
  const args:any[] = partialArgs;
  return function (...fullArguments:any[]):any {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) args[i] = fullArguments[arg++];
    }
    return fn.apply(null, args);
  };
};

export const compose = (...fns:Function[]):Function => (value:any):Function[] =>
  reduce(fns.reverse(), (acc:any, fn:Function) => fn(acc), value);

export const pipe = (...fns:Function[]):Function => (value:any):Function[] =>
  reduce(fns, (acc:any, fn:Function) => fn(acc), value);

export const identity = (it:any):any => {
  console.log(it);
  return it;
};

export const isFunction = (variable:any):boolean =>
  (typeof variable === 'function' || variable instanceof Function);

export const divider = (options: Divider): string =>
  options.char.repeat(options.amount);

export const log = (type: string, ...args: any[]): void => {
  const { char, amount } = args[args.length - 1] instanceof Divider
    ? args.pop() : new Divider();

  console[type](divider({ char, amount }));
  console[type](...args);
  console[type]();
};

export class Divider{
  char: string;
  amount: number;

  constructor(options?:any) {
    this.char = options && options.char || '=';
    this.amount = options && options.amount || 30;
  }
}
