import { BaseModel } from './base.model';
import {Deserializable} from "./deserialize.model";

export class Section implements Deserializable{
    name: string;
    key: string;
    order: number;
    readonly: boolean;
    type: string;
    fields: BaseModel;
  
    constructor(options: {
      name?: string,
      key?: string,
      order?: number,
      readonly?: boolean,
      type?: string,
      fields?: BaseModel
    } = {}) {
      this.name = options.name;
      this.key = options.key || '';
      this.type = options.type || '';
      this.readonly = options.readonly;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type || '';
      this.fields = options.fields;
    }
    deserialize(input: any) {
      Object.assign(this, input);
      for(let field of input.fields)
      this.fields = new BaseModel().deserialize(field);
      return this;
    }
  }
  