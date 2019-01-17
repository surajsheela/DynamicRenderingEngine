import { Page } from './page.model';

export class Application {
  region: string;
  country: string;
  locale: string;
  appCode: string;
  appName: string;
  pages: Page[]

    constructor() { }

    static fromDtoToUi(dto: any): Application {
      if(dto) {
        let uiModel = new Application();
        uiModel.region = dto.region
        uiModel.locale = dto.locale
        uiModel.appName = dto.appName
        uiModel.pages = (dto.pages || []).map(section => new Page(section))
        return uiModel;
      }
      return null;
    }

  }
  

  