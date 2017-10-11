export declare class Switch {
    value: any;
    variable: any;
    state: string;
    predicate: any;
    condition: any;
    constructor(variable: any);
    case(condition: any): Switch;
    do(fn: Function): Switch;
    else(fn: Function): Switch;
    pipe(value: any): Switch;
    parse(value: any): Switch;
    private break(newValue, oldValue);
    private execute(fn);
    private setState(state);
    private getPredicate(condition, variable);
    private getArguments();
}
export default Switch;
