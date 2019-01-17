export class Navigation {
    nextLink: string;
    previousLink: string;
  
    constructor(options: {
      nextLink?: string,
      previousLink?: string
    } = {}) {
      this.nextLink = options.nextLink || '';
      this.previousLink = options.previousLink || '';
    }
  }
  