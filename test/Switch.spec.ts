import { Switch } from '../src/Switch';

describe('Switch', () => {

  it('returns parsed value', () => {
    const parsedValue = 'parsed';

    const parseSwitch = new Switch(3)
      .case(() => 9 / 3)
        .do((switchClass:Switch) => {
          switchClass.parse(parsedValue);
        })
      .case(2)
        .do((switchClass:Switch) => {})
      .else((parse:Function) => {});

    expect(parseSwitch.value).toBe(parsedValue);
  });

  it('returns piped value', () => {
    const initialValue = 'piped';
    const pipeFn = (value:string) => value.repeat(20);
    const finalValue = pipeFn(initialValue);

    const pipeSwitch = new Switch(3)
      .case(3)
        .do((switchClass:Switch) => {
          switchClass.pipe(initialValue);
        })
      .case(2)
        .do((switchClass:Switch) => {})
      .case(1)
        .do((switchClass:Switch) => {
          const pipedValue = pipeFn(switchClass.value);
          switchClass.pipe(pipedValue);
        })
      .else((parse:Function) => {});

    expect(pipeSwitch.value).toBe(finalValue);
  });

  it('returns fallback value', () => {
    const fallbackValue = 'fallback';

    const fallbackSwitch = new Switch(10)
      .case(() => 9 / 3)
        .do((switchClass:Switch) => {})
      .case(2)
        .do((switchClass:Switch) => {})
      .else((parse:Function) => parse(fallbackValue));

    expect(fallbackSwitch.value).toBe(fallbackValue);
  });

  it('logs state if debug is true', () => {
    const fallbackValue = 'fallback';
    spyOn(console, 'log');

    new Switch(() => 2 * 5, true)
      .case(() => 9 / 3)
        .do((switchClass:Switch) => {})
      .case(2)
        .do((switchClass:Switch) => {})
      .else((parse:Function) => parse(fallbackValue));

    expect(console.log).toHaveBeenCalled();
  });

  it('returns null if no fallback is provided', () => {
    const fakeFunction:any = '';

    const fallbackSwitch = new Switch(10)
      .case(() => 9 / 3)
        .do((switchClass:Switch) => {})
      .case(2)
        .do((switchClass:Switch) => {})
      .else(fakeFunction);

    expect(fallbackSwitch.value).toBeNull();
  });
});
