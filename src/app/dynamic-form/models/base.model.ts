
export class BaseModel {
    value: string;
    key: string;
    label: string;
    required: boolean;
    order: number;
    layout:any;
    name:string;
    options: any;
    type: string;
    showWhen: ControlCondition;
  
    constructor(options) {
      this.value = options.value;
      this.name = options.name;
      this.options = options.options || [];
      this.layout = options.layout;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.showWhen = options.showWhen;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type || '';
    }
  }
  
  export class ControlCondition {
    key: string;
    value: string;
  }