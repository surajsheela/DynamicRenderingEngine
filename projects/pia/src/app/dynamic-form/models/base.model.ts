import {Deserializable} from "./deserialize.model";

export class BaseModel implements Deserializable{
    value: string;
    key: string;
    label: string;
    required: boolean;
    order: number;
    type: string;
    showWhen: ControlCondition;
  
    constructor(options: {
      value?: string,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      type?: string,
      showWhen?: ControlCondition
    } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.showWhen = options.showWhen;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type || '';
    }
    deserialize(input: any) {
      Object.assign(this, input);
      this.showWhen = new ControlCondition().deserialize(input.showWhen);
      return this;
    }
  }
  
  export class ControlCondition {
    key: string;
    value: string;
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }