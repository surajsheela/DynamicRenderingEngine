import { BaseModel } from './base.model';
export class Section {
    name: string;
    key: string;
    order: number;
    readonly: boolean;
    type: string;
    fields: BaseModel[];
  
    constructor(options) {
      this.name = options.name;
      this.key = options.key || '';
      this.type = options.type || '';
      this.readonly = options.readonly;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type || '';
      this.fields = (options.fields || []).map(field => new BaseModel(field));
    }
  }
  