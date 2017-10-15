import { isFunction, unless } from './Functional';

export class Switch {
  value:any;
  variable:any;
  state:string;
  predicate:any;
  condition:any;
  debug:boolean;

  constructor(variable:any, debug:boolean = false) {
    this.debug = debug;
    this.value = null;
    this.variable = isFunction(variable) ? variable() : variable;
    this.setState('initialized');
  }

  case(condition:any):Switch {
    unless(this.state === 'break', () => {
      unless(this.state === 'pipeline', () => this.setState('pending'));
      this.predicate = this.getPredicate(condition, this.variable);
      this.condition = this.predicate === this.variable ? condition : null;
    });
    return this;
  }

  do(fn:Function):Switch {
    unless(this.state === 'break', () => {
      const newState = this.condition && fn ? 'success' : 'abort';
      unless(this.state === 'pipeline', () => this.setState(newState));
      this.execute(fn);
    });
    return this;
  }

  else(fn:Function):Switch {
    if (this.state !== 'break' && this.state !== 'pipeline') {
      this.predicate = null;
      this.setState('fallback');
      if (fn && this.parse) fn(this.parse.bind(this));
    }
    return this;
  }

  pipe(value:any):Switch {
    unless(this.state === 'break', () => {
      this.setState('pipeline');
      this.value = value || this.value;
    });
    return this;
  }

  parse(value:any):Switch {
    unless(this.state === 'break', () => {
      this.setState('parsing');
      this.value = this.break(value, this.value);
    });
    return this;
  }

  private break(newValue:any, oldValue:any):any {
    this.setState('break');
    return newValue !== oldValue ? newValue : oldValue;
  }

  private execute(fn:Function):Switch {
    if (this.state === 'success' || this.state === 'pipeline') {
      const args = this.getArguments();
      fn(args);
    }
    return this;
  }

  private setState(state:string):void {
    this.state = state || this.state;
    this.debug ? console.warn('state', this.state) : undefined;
  }

  private getPredicate(condition :any, variable : any):any {
    return condition === variable
      ? condition : isFunction(condition)
        ? condition(variable) : condition;
  }

  private getArguments():Switch {
    return Object.assign({}, this, {
      pipe: this.pipe.bind(this),
      parse: this.parse.bind(this),
    });
  }
}

export default Switch;
