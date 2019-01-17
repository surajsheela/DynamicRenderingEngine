import { Section } from './section.model';

export class Page {
    pageId: string;
    pageName: string;
    layout: any;
    navigation: any;
    section: Section[];
  
    constructor(options) {
      this.pageId = options.pageId;
      this.pageName = options.pageName || '';
      this.layout = options.layout;
      this.navigation = options.navigation;
      this.section = (options.sections || []).map(section => new Section(section));
    }
  }
  