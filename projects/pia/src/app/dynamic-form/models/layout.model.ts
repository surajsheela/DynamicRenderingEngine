export class Layout {
    colspan: number;
    rowspan: number;
    class: string;
  
    constructor(options: {
      colspan?:number,
      rowspan?: number,
      class?: string,
    } = {}) {
      this.colspan = options.colspan;
      this.rowspan = options.rowspan;
      this.class = options.class;
    }
  }
  