import { Switch } from '../../lib/js';

const switcher = Switch.of(3)
  .case(() => 9 / 3)
    .do(({ value, pipe, parse }) => {
      parse('test');
    })
  .case(2)
    .do((_switch) => {
      const value = new String(_switch.value).repeat(25);
      _switch.pipe(value);
    })
  .else((parse) => {
    parse('fallback value')
  });

console.log('value', switcher.value);