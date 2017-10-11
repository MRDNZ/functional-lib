import { Switch } from '../../lib/ts';

const switcher = new Switch(3)
  .case(() => 9 / 3)
    .do(({ value, pipe, parse }:Switch) => {
      parse('test');
    })
  .case(2)
    .do((_switch:Switch) => {
      const value = new String(_switch.value).repeat(25);
      _switch.pipe(value);
    })
  .else((parse:Function) => {
    parse('fallback value')
  });

console.log('switcher', switcher.value);