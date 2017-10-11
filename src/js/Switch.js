const unless = (predicate, fn) => !predicate ? fn() : undefined;
const isFunction = (variable) => (typeof variable === 'function' || variable instanceof Function);

export class Switch {
  constructor(variable){
    this.value = null;
    this.variable = isFunction(variable) ? variable() : variable;
    this.setState('initialized');
  }

  case(condition){
    unless(this.state === 'break', () => {
      unless(this.state === 'pipeline', () => this.setState('pending'));
      this.predicate = this.getPredicate(condition, this.variable);
      this.condition = this.predicate === this.variable ? condition : null;
    });
    return this;
  }

  do(fn){
    unless(this.state === 'break', () => {
      const newState = this.condition && fn ? 'success' : 'abort';
      unless(this.state === 'pipeline', () => this.setState(newState));
      this.execute(fn);
    });
    return this;
  }

  execute(fn){
    if(this.state === 'success' || this.state === 'pipeline'){
      const args = this.getArguments();
      fn(args);
    }
    return this;
  }

  else(fn) {
    if(this.state !== 'break' && this.state !== 'pipeline'){
      this.predicate = null;
      this.setState('fallback');
      if(fn && this.parse) fn(this.parse.bind(this))
    }
    return this;
  }

  pipe(value){
    unless(this.state === 'break', () => {
      this.setState('pipeline');
      this.value = value || this.value;
    });
    return this;
  }

  parse(value){
    unless(this.state === 'break', () => {
      this.setState('parsing');
      this.value = this.break(value, this.value)
    });
    return this;
  }

  break(newValue, oldValue){
    this.setState('break');
    return newValue !== oldValue ? newValue : oldValue;
  }

  setState(state){
    this.state = state || this.state;
    console.warn('state', this.state);
  }

  getPredicate(condition, variable){
    return condition === variable
      ? condition : isFunction(condition)
        ? condition(variable) : eval(condition);
  }

  getArguments(){
    return Object.assign({}, this, {
      pipe: this.pipe.bind(this),
      parse: this.parse.bind(this)
    });
  }
}

Switch.of = (variable) => new Switch(variable);

export default { Switch };