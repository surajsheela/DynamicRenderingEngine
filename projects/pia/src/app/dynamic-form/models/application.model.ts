import { Page } from './page.model';
import {Deserializable} from "./deserialize.model";

export class Application implements Deserializable{
  region: string;
  country: string;
  locale: string;
  appCode: string;
  appName: string;
  page : Page;
    constructor(options: {
      region?: string,
      country?: string,
      locale?: string,
      appCode?: string,
      appName?: string,
      page?: Page
    } = {}) {
      this.region = options.region;
      this.country = options.country || '';
      this.locale = options.locale || '';
      this.appCode = options.appCode || '';
      this.appName = options.appName || '';
      this.page = options.page;
    }

    deserialize(input: any) {
      Object.assign(this, input);
      for(let page of input.pages)
      this.page = new Page().deserialize(page);
      return this;
    }
  }
  