import { Switch, log, Divider } from '../../lib';


const parseSwitch = new Switch(3, true)
  .case(() => 9 / 3)
    .do(({ value, pipe, parse }:Switch) => {
      parse('=> parsedValue');
    })
  .case(2)
    .do((switchClass:Switch) => {
      const divider = { char: switchClass.value, amount: 5 };
      const value = new Divider(divider);
      switchClass.pipe(value);
    })
  .else((parse:Function) => {
    parse('fallback value');
  });

log('log', 'parseSwitch', parseSwitch.value);


const pipeSwitch = new Switch(3, true)
  .case(() => 9 / 3)
    .do(({ value, pipe, parse }:Switch) => {
      pipe('=> pipedValue');
    })
  .case(2)
    .do((switchClass:Switch) => {
      const divider = { char: switchClass.value, amount: 5 };
      const value = new Divider(divider);
      switchClass.pipe(value);
    })
  .else((parse:Function) => {
    parse('fallback value');
  });

log('log', 'pipeSwitch', pipeSwitch.value);


const fallbackSwitch = new Switch(10, true)
.case(() => 9 / 3)
  .do(({ value, pipe, parse }:Switch) => {
    pipe('=> pipedValue');
  })
.case(2)
  .do((switchClass:Switch) => {
    const divider = { char: switchClass.value, amount: 5 };
    const value = new Divider(divider);
    switchClass.pipe(value);
  })
.else((parse:Function) => {
  parse('fallback value');
});

log('log', 'fallbackSwitch', fallbackSwitch.value);
