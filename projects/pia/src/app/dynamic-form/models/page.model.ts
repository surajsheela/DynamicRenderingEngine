import { Section } from './section.model';
import { Navigation } from './navigation.model';
import {Layout} from './layout.model';
import {Deserializable} from "./deserialize.model";

export class Page implements Deserializable{
    pageId: string;
    pageName: string;
    layout: Layout;
    navigation: Navigation;
    section: Section;
  
    constructor(options: {
      pageId?: string,
      pageName?: string,
      layout?: Layout,
      navigation?: Navigation,
      type?: string,
      section?: Section
    } = {}) {
      this.pageId = options.pageId;
      this.pageName = options.pageName || '';
      this.layout = options.layout;
      this.navigation = options.navigation;
      this.section = options.section;
    }

    deserialize(input: any) {
      Object.assign(this, input);
      for(let section of input.sections)
      this.section = new Section().deserialize(section);
      return this;
    }
  }
  