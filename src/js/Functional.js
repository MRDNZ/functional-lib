export const forEach = (arr, fn) => {
  for(let i = 0; i < arr.length; i++){
    fn(arr[i]);
  }
}

export const forEachObject = (obj, fn) => {
  for(const property in obj){
    if(obj.hasOwnProperty(property)){
      fn(property, obj[property]);
    }
  }
}

export const unless = (predicate, fn) => {
  if(!predicate) fn();
}

export const every = (arr, fn) => {
  let result = true;
  for(const value of arr){
    result = result && fn(value);
  }
  return result;
}

export const some = (arr, fn) => {
  let result = false;
  for(const value of arr){
    result = result || fn(value);
  }
  return result;
}

export const sortBy = (property) => (a,b) => (a[property] < b[property])
  ? -1 : (a[property] > b[property]) ? 1 : 0;

export const closure = (variable) => (fn) => fn(variable);

export const once = (fn) => {
  let done = false;
  return function (){
    return done ? undefined : ((done = true), fn.apply(this, arguments))
  }
}

export const factorial = (n) => {
  if(n === 0) return 1;
  return n * factorial(n - 1);
}

export const memoized = (fn) => {
  const storeObj = {};
  return (arg) => storeObj[arg] || (storeObj[arg] = fn(arg));
}

export const map = (arr, fn) => {
  let results = [];
  for(const value of arr){
    results.push(fn(value));
  }
  return results;
}

export const filter = (arr, fn) => {
  let results = [];
  for(const value of arr){
    (fn(value)) ? results.push(value) : undefined
  }
  return results;
}

export const concatAll = (arr, fn) => {
  let results = [];
  for(const value of arr){
    results.push.apply(results, value);
  }
  return results;
}

export const reduce = (arr, fn, initial) => {
  let acc = initial != undefined ? initial : arr[0];

  if(initial === undefined){
    for(let i = 1; i < arr.length; i++){
      acc = fn(acc, arr[i]);
    }
  } else {
    for(const value of arr){
      acc = fn(acc, value)
    }
  }

  return [acc];
}

export const zip = (leftArr, rightArr, fn) => {
  let i, results = [];
  for(i = 0; i < Math.min(leftArr.length, rightArr.length); i++){
    results.push(fn(leftArr[i], rightArr[i]))
  }
  return results;
}

export const curry = (fn) => {
  if(!isFunction(fn)) throw Error('No function provided');

  return function curriedFn(...args){
    if(args.length < fn.length){
      return function(){
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      }
    }
    return fn.apply(null, args);
  }
}

export const partial = function(fn, ...partialArgs){
  let args = partialArgs;
  return function(...fullArguments){
    let arg = 0;
    for(let i = 0; i < args.length && arg < fullArguments.length; i++){
      if(args[i] === undefined){
        args[i] = fullArguments[arg++]
      }
    }
    return fn.apply(null, args);
  }
}

export const compose = (...fns) => (value) => reduce(fns.reverse(), (acc, fn) => fn(acc), value);
export const pipe = (...fns) => (value) => reduce(fns, (acc, fn) => fn(acc), value);

export const identity = (it) => {
  console.log(it);
  return it;
};

export const isFunction = (variable) => (typeof variable === 'function' || variable instanceof Function)
