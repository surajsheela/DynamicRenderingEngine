import { BaseModel } from './base.model';

export class DropdownInput extends BaseModel {
  type = 'select';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
