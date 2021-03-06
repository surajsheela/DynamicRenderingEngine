import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { nextTick } from 'q';
import { Observable } from 'rxjs';
import { Application } from '../dynamic-form/models/application.model';
import { Response } from '@angular/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  constructor(private http: HttpClient) { }
  // getUser(region: string): Observable<Page[]> {
  //   this.observable=this.http.get('../../assets/data/organisation.json')
  //   .map(response =>  {

  //     if(response.status == 400) {
  //       return "FAILURE";
  //     } else if(response.status == 200) {
  //       this.page = new Page(response.json());
  //       return this.page;
  //     }
  //     // make it shared so more than one subscriber can get the result
  //   })
  //   return this.observable;
  //     // .map((res: Response) => res.json().response.map((page: Page) => new Page().deserialize(page)));
  // }
  
  getData(): Observable<Application> {
    return this.http.get<Application>('../../assets/data/pia.json')
      .pipe(
        map(res => new Application().deserialize(res))
      );
  }
  verifyUser(region: string) {

    return of({
      "region": "USA",
      "country": "US",
      "locale": "en",
      "appCode": "ADCA",
      "appName": "Apple Direct Customer Agreement",
      "pages": [
        {
          "pageId": 1,
          "pageName": "welcomePage",
          "navigation":{
            "nextLink" :"home",
            "previousLink" :"organization"
          },
          "layout": {
            "colspan": 20,
            "rowspan": 20,
            "class": "container"
          },
          "sections": [
            {
              "name": "section1",
              "key": "1",
              "order": "1",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "title",
                  "key": "appTitle",
                  "label": "Apple Account <br> Direct Customer Agreement ",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "class": "app-title"
                  },
                  "dependency": []
                },
                {
                  "name": "thankyouMessage",
                  "key": "thankyouMessage",
                  "label": "Thank you for your interest in Apple's Direct Customer Agreement.<br> A valid purchase agreement is required for all direct purchases from Apple Inc.",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "2",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "thankyou-message"
                  },
                  "dependency": []
                },
                {
                  "name": "preAppChecklist",
                  "key": "preAppChecklist",
                  "label": "<div class='USContent'><p class=formHelpText>Before You Apply, Please review ALL items on the checklist. Once you have gone through the checklist, select the 'I agree' button at the bottom of the page to start your submission. Your submission will not be complete until you reach the 'Thank You' page and receive a confirmation email.</p><div class=col-sm-12 secondInfo><div class=col-sm-6 LocationPhotos><div class=info-head><b>Pre-Application Checklist:</b></div><ol><li><strong>Review the Apple Direct Customer Agreement</strong><br> Click the link below to review the Agreement.<br><p><a class='more'>ADCA v20160114</a></p></li><li><strong>Signature Authority</strong><br>Before proceeding, certify with your purchasing division that you have the authority to contractually bind your organization to the Terms and Conditions of the Agreement. <br> <strong>Signature Authority for Education customer. </strong><br>Please be aware that the Terms and Conditions of the Agreement bind the entire district. Individual schools should not proceed before verifying with the district administration that you are authorized to enter into the Agreement.<a class='more'>Signature Authority Title Examples</a></li><br><li><strong>Tax Exemption Certificate </strong><br>For customers claiming exemption from state and local sales taxes, Apple Inc. is requesting your sales tax exemption document. You can provide your exemption tax certificates to Apple by completing the online Exemption Certificate Wizard, powered by Avalara CertCapture. <br><strong>Instructions for providing your Sales Tax Exemption Certificates:</strong> <ul><li>Click on the link below to access the Exemption Certificate Wizard</li><li>Fill in required fields and follow instructions to submit the certificate</li><li>Upon completion you will receive a Certificate ID<br> (you will receive your Certificate ID on the 'Congratulations' page after you submit your certificate in the wizard and it will be on the certificate or affidavit created)</li> <li>You will be asked for your Certificate ID in the Organization section of the Apple Direct Customer Agreement Application. <br> <a href='https://portal.certcapture.com/?c=94fa4b06b46989581e8a5aca050baa56' class='more' target='_blank'>Click here to generate your Tax Certificate ID</a></li> </ul> Note : You may also upload a PDF copy of your already prepared tax certificate via the online Exemption Certificate Wizard. After selecting your reason for exemption and clicking 'Save and Continue' in Step 3 of the wizard, select 'Upload' above the document image and follow the instructions. Your Certificate ID will be  displayed at the end of the process.<br> <br> </li> <li><strong>Apple Credit Application </strong> <br> Private, Charter and Commercial organizations applying for credit terms are required to complete the Apple Credit Application. Public institutions and government agencies are not required to complete a credit application. <br> <strong>Instructions for completing the Apple Credit Application</strong><ul> <li>Click on the link below to download the Apple Credit Application </li><li>The credit application must be <b><u>printed and physically signed</u></b></li><li>The person who signs the credit application must have proper signature authority, as it is used to obtain a bank reference</li> <li>You will be required to upload the credit application in the Organization section of the Apple Direct Customer Agreement Application <br> <a class='more'>Download Credit Application</a></li> </ul></li> <li><strong>Additional Locations</strong><br> For additional shipping locations other than the headquarters or district location, please download and complete the Location Template. You will be asked to upload the completed template in the Location Information section of this application.<br>Note: Shipping locations cannot be a PO Box address.<br><a class='more'>Download Location Template</a> </li></ol></div><div  class=col-sm-6 LocationTax><div class=info-head><b>Eligible Organizations</b></div><div><div class='eligible'><p>The following organizations are eligible to purchase under the Apple Direct Customer Agreement.</p><h4>Education or State &amp; Local Government Agency:</h4><p>To determine if you are eligible to purchase under an existing statewide or regional Apple purchase Agreement, please visit: <a href='http://www.apple.com/education/shop/contracts' target='_blank'>www.apple.com/education/shop/contracts</a>.</p><p>Note: If your organization does not wish to purchase under an existing agreement, you can apply for an Apple Direct Customer Agreement (ADCA).</p><h4>Education:</h4><p>Degree-granting institutions organized for educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code. Eligible purchasers include:</p><ul><li>Purchaser and any school districts and their school system </li><li>Boards of education </li><li>State universities and colleges  </li><li>Community, vocational, and technical colleges</li><li>Charter schools and private institutions or organizations </li></ul><h4>State and Local Government Agency</h4><p>Eligible purchasers include:</p> <ul><li>State and local government agencies</li><li>Political subdivisions</li><li>Public benefit corporations  </li><li>Any entity authorized by state law </li></ul><h4>US Government Agency</h4><p>Eligible purchasers include:</p><ul><li>Any US Government Agency</li><li>Indian Reservations</li></ul><p> Note: Products purchased will be for purchaser's own use in the continental United States, Alaska, Hawaii and at US military locations outside the US, subject to US export laws.</p><h4>Commercial Organizations</h4><p>Eligible purchasers include:</p> <ul><li>Corporations</li><li>Partnerships</li><li>Sole Proprietorships</li><li>Non-profit organizations (not including Education Institutions defined above)</li><li>Small to large businesses</li></ul><p>Note: Products purchased by commercial organizations must be for the organization's own use and not for resale.</p></div></div></div></div></div>",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "class": "container middlesection"
                  },
                  "dependency": []
                },
                {
                  "name": "cautiontext",
                  "key": "cautiontext",
                  "label": "Caution to Signatory<br><br>As the person submitting this application, you represent and warrant that you are authorized to bind the organization to the terms and conditions set forth in the application.",
                  "readonly": false,
                  "type": "label",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "conrol-label"
                  },
                  "dependency": []
                },
                {
                  "name": "cautionAgree",
                  "key": "cautionAgree",
                  "label": "By checking this box, I represent and warrant that I am authorized to bind said organization to the terms and conditions set forth in the application.",
                  "value": "",
                  "readonly": false,
                  "type": "checkbox",
                  "required" : true,
                  "order": "3",
                  "defaultValue": "No",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "agree",
                  "key": "agree",
                  "label": "By clicking 'I Agree', you will begin the application process.",
                  "value": "",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "control-label"
                  },
                  "dependency": []
                },
                {
                  "name": "nextwelcome",
                  "key": "organization",
                  "type": "button",
                  "label" : "I Agree",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"organization",
                  "action" : "nextWelcome()",
                  "dependency": []
                }
              ]
            }]
        },
        {
          "pageId": 2,
          "pageName": "organizationInfo",
          "layout": {
            "colspan": 20,
            "rowspan": 20,
            "class": "container"
          },
          "navigation":{
            "nextLink" :"organizationType",
            "previousLink" :"welcome"
          },
          "sections": [
            {
              "name": "section1",
              "key": "1",
              "order": "1",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "orgQuestionTypePage",
                  "key": "orgQuestionTypePage1",
                  "label": "Organization Type",
                  "readonly": false,
                  "type": "label",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "control-label main-heading"
                  }
                }
              ]
            },
            {
              "name": "section2",
              "key": "2",
              "order": "2",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "orgQuestion",
                  "key": "orgQuestion",
                  "label": "What is your organization?",
                  "readonly": false,
                  "type": "label",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "conrol-label"
                  }
                },
                {
                  "name": "organizationType",
                  "label": "Organization Type:",
                  "value": "",
                  "required" : true,
                  "key": "orgtype",
                  "readonly": false,
                  "type": "select",
                  "options": [{ "key": "commercial", "value": "Commercial" },
                  { "key": "education", "value": "Education Institution" },
                  { "key": "state", "value": "State/Local Government" }],
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  }
                },
                {
                  "name": "eduInstit",
                  "label": "Education Institution:",
                  "required" : true,
                  "value": "",
                  "key": "edutype",
                  "readonly": false,
                  "type": "select",
                  "options": [{ "key": "k12", "value": "k12" },
                  { "key": "higher", "value": "Higher" }],
                  "showWhen": {
                    "key": "orgtype",
                    "value": "education"
                  },
                  "order": "2",
                  "defaultVisible": false,
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  }
                },
                {
                  "name": "entityType",
                  "label": "Entity Type:",
                  "required" : true,
                  "value": "",
                  "key": "entityType",
                  "readonly": false,
                  "type": "select",
                  "options": [{ "key": "select", "value": "Select" },
                  { "key": "private", "value": "Private" },
                  { "key": "public", "value": "Public" }],
                  "showWhen": {
                    "key": "orgtype",
                    "value": "education"
                  },
                  "order": "3",
                  "defaultVisible": false,
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  }
                }
              ]
            },
            {
              "name": "section3",
              "key": "3",
              "order": "3",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "stateTax",
                  "key": "statetax",
                  "label": "Exempt from State and Local Sales Tax:",
                  "value": "",
                  "readonly": false,
                  "type": "select",
                  "options": [{ "key": "yes", "value": "YES" },
                  { "key": "no", "value": "NO" }],
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "taxCertId",
                  "key": "taxcert",
                  "label": "Please enter your Tax Certificate ID:",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "options": [],
                  "order": "2",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "applyCreditAccount1",
                  "key": "applyCreditAccount",
                  "label": "Are you applying for a credit terms account?",
                  "value": "",
                  "options": [{ "key": "yes", "value": "YES" },
                  { "key": "no", "value": "NO" }],
                  "readonly": false,
                  "type": "radio",
                  "order": "3",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "downloadAppl",
                  "key": "downloadAppl",
                  "label": "Please download Apple's Credit Application template: <a href='/documents/aamt/ALAC Apple Tax Questionaire.pdf' download>here</a>",
                  "readonly": false,
                  "type": "label",
                  "options": [],
                  "order": "4",
                  "defaultValue": "",
                  "validations": [],
                  "showWhen": {
                    "key": "applyCreditAccount",
                    "value": "yes"
                  },
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  }
                },
                {
                  "name": "uploadAppl",
                  "key": "uploadAppl",
                  "label": "Please upload the completed and signed Apple Credit Application:",
                  "value": "",
                  "readonly": false,
                  "type": "file",
                  "required" : true,
                  "order": "5",
                  "validations": [],
                  "showWhen": {
                    "key": "applyCreditAccount",
                    "value": "yes"
                  },
                  "layout": {
                    "class": ""
                  }
                },
                {
                  "name": "applSalesRep",
                  "key": "applSalesRep",
                  "label": "Apple Sales Representative:",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "class": "col-sm-6"
                  },
                  "dependency": []
                },
                {
                  "name": "soldToNumber",
                  "key": "soldToNumber",
                  "label": "Have you ever had an account with Apple? If yes, please provide Sold-To Account Number:",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "2",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "addComments",
                  "key": "addComments",
                  "label": "Are there any additional comments for this application?<br>(300 character limit)",
                  "value": "",
                  "readonly": false,
                  "type": "textarea",
                  "order": "3",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "form-control"
                  }
                },
                {
                  "name": "nextorganisation",
                  "key": "organizationtype",
                  "type": "button",
                  "label" : "Next",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"organizationtype",
                  "action" : "nextOrganization()",
                  "dependency": []
                },
                {
                  "name": "prevorganisation",
                  "key": "welcome",
                  "type": "button",
                  "label" : "Previous",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"organization",
                  "action" : "prevOrganization()",
                  "dependency": []
                }
              ]
            }
          ]
          
        },
        {
          "pageId": 3,
          "pageName": "organizationType",
          "layout": {
            "colspan": 20,
            "rowspan": 20,
            "class": "container"
          },
          "navigation":{
            "nextLink" :"contactInfo",
            "previousLink" :"organizationInfo"
          },
          "sections": [
            {
              "name": "section1",
              "key": "1",
              "order": "1",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "orglegalname",
                  "key": "orglegal",
                  "label": "Organization Legal Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "orgdbaname",
                  "key": "orgdba",
                  "label": "Organization DBA Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "street1",
                  "key": "streetaddress",
                  "label": "Street Address",
                  "value": "",
                  "readonly": false,
                  "required" : true,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "street2",
                  "key": "streetaddress2",
                  "label": "Street Address 2",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "city",
                  "key": "cityname",
                  "label": "City",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "state",
                  "label": "State/Region:",
                  "value": "",
                  "key": "stateregion",
                  "readonly": false,
                  "type": "select",
                  "required" : true,
                  "options": [
                  { "key": "alabama", "value": "Alabama" },
                  { "key": "alaska", "value": "Alaska" },
                  { "key": "arizona", "value": "Arizona" },
                  { "key": "arkansas", "value": "Arkansas" },
                  { "key": "california", "value": "California" },
                  { "key": "colorado", "value": "Colorado" },
                  { "key": "connecticut", "value": "Connecticut" },
                  { "key": "Delaware", "value": "Delaware" },
                  { "key": "districtofcolumbia", "value": "District of Columbia" },
                  { "key": "florida", "value": "Florida" },
                  { "key": "georgia", "value": "Georgia" },
                  { "key": "Hawaii", "value": "Hawaii" },
                  { "key": "idaho", "value": "Idaho" }],
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  }
                },
                {
                  "name": "country",
                  "key": "countryname",
                  "label": "Country",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "postalzip",
                  "key": "postal",
                  "label": "Zip/Postal Code",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "orgemail",
                  "key": "orgemailadd",
                  "label": "Organization Email",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "phone",
                  "key": "phonenumb",
                  "label": "Phone",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "fax",
                  "key": "faxnumber",
                  "label": "Fax",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "orgurl",
                  "key": "orgurlname",
                  "label": "Organization URL",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                }
              ]
            },
            {
              "name": "section2",
              "key": "2",
              "order": "3",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "locType",
                  "key": "loctype",
                  "label": "Location Type (select all that apply)",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "2",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "loc-type"
                  },
                  "dependency": []
                },
                {
                  "name": "billto",
                  "key": "billto",
                  "label": " Bill-To: An address where invoices from Apple are mailed",
                  "value": "",
                  "readonly": false,
                  "type": "checkbox",
                  "order": "3",
                  "defaultValue": "No",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "shipto",
                  "key": "shipto",
                  "label": "Ship-To: A location, which receives shipments from Apple (cannot be a PO Box address)",
                  "value": "",
                  "readonly": false,
                  "type": "checkbox",
                  "order": "3",
                  "defaultValue": "No",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "addLocs",
                  "key": "addlocations",
                  "label": "Additional Locations",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "2",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "add-loc"
                  },
                  "dependency": []
                },
                {
                  "name": "locTemplate",
                  "key": "loctemplate",
                  "label": "To provide additional Bill-To or Ship-To locations, please add via this downloadable template",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "2",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "loc-template"
                  },
                  "dependency": []
                },
                {
                  "name": "uploadLoc",
                  "key": "uploadtemplate",
                  "type": "upload",
                  "label" : "Upload Location Template",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"",
                  "action" : "nextOrganization()",
                  "dependency": []
                },
                {
                  "name": "nextorganisationtype",
                  "key": "contactinfo",
                  "type": "button",
                  "label" : "Next",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"contactinfo",
                  "action" : "nextOrganizationType()",
                  "dependency": []
                },
                {
                  "name": "prevorganisationtype",
                  "key": "welcome",
                  "type": "button",
                  "label" : "Previous",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"organization",
                  "action" : "prevOrganizationType()",
                  "dependency": []
                }
              ]
            }
          ]
        },
        {
          "pageId": 4,
          "pageName": "contactinfo",
          "layout": {
            "colspan": 20,
            "rowspan": 20,
            "class": "container"
          },
          "navigation":{
            "nextLink" :"validation",
            "previousLink" :"organizationType"
          },
          "sections": [
            {
              "name": "section1",
              "key": "1",
              "order": "1",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "contactinfolabel",
                  "key": "contactinfolabel",
                  "label": "Contact Information",
                  "readonly": false,
                  "type": "label",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "control-label main-heading"
                  }
                },
                {
                  "name": "executive",
                  "key": "executive",
                  "label": "<p><b>Executive (Signing Officer)</b><p>",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "class": ""
                  },
                  "dependency": []
                },
                {
                  "name": "firstname",
                  "key": "firstname",
                  "label": "First Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "lastname",
                  "key": "lastname",
                  "label": "Last Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "title",
                  "key": "title",
                  "label": "Title",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "email",
                  "key": "email",
                  "label": "Email",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "phone",
                  "key": "phone",
                  "label": "Phone",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                }
              ]
            },
            {
              "name": "section2",
              "key": "2",
              "order": "2",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "sameas",
                  "key": "sameas",
                  "label": "Same as Executive (Signing Officer)",
                  "value": "",
                  "readonly": false,
                  "type": "checkbox",
                  "order": "3",
                  "defaultValue": "No",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "executive",
                  "key": "executive",
                  "label": "<p><b>Main Contact - if different from Executive (Signing Officer)</b><p>",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "class": ""
                  },
                  "dependency": []
                },
                {
                  "name": "firstname",
                  "key": "firstname",
                  "label": "First Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "lastname",
                  "key": "lastname",
                  "label": "Last Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "title",
                  "key": "title",
                  "label": "Title",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "email",
                  "key": "email",
                  "label": "Email",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "phone",
                  "key": "phone",
                  "label": "Phone",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                }
              ]
            },
            {
              "name": "section3",
              "key": "3",
              "order": "3",
              "readonly": false,
              "type": "division",
              "fields": [
                {
                  "name": "sameas",
                  "key": "sameas",
                  "label": "Same as Executive (Signing Officer)",
                  "value": "",
                  "readonly": false,
                  "type": "checkbox",
                  "order": "3",
                  "defaultValue": "No",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "input-field"
                  },
                  "dependency": []
                },
                {
                  "name": "executive",
                  "key": "executive",
                  "label": "<p><b>Accounts Payable Contact</b><p>",
                  "readonly": false,
                  "type": "paragraph",
                  "order": "1",
                  "validations": [],
                  "layout": {
                    "class": ""
                  },
                  "dependency": []
                },
                {
                  "name": "firstname",
                  "key": "firstname",
                  "label": "First Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "lastname",
                  "key": "lastname",
                  "label": "Last Name",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "title",
                  "key": "title",
                  "label": "Title",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "email",
                  "key": "email",
                  "label": "Email",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "phone",
                  "key": "phone",
                  "label": "Phone",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "fax",
                  "key": "fax",
                  "label": "Fax",
                  "value": "",
                  "readonly": false,
                  "type": "input",
                  "required" : true,
                  "order": "1",
                  "defaultVisible": false,
                  "defaultValue": "",
                  "validations": [],
                  "layout": {
                    "colspan": 20,
                    "rowspan": 20,
                    "class": "col-sm-6"
                  }
                },
                {
                  "name": "nextorganisationtype",
                  "key": "contactinfo",
                  "type": "button",
                  "label" : "Next",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"contactinfo",
                  "action" : "nextOrganization()",
                  "dependency": []
                },
                {
                  "name": "prevorganisationtype",
                  "key": "organization",
                  "type": "button",
                  "label" : "Previous",
                  "validations": [],
                  "layout": {
                    "class": "control-label"
                  },
                  "route":"organization",
                  "action" : "prevOrganization()",
                  "dependency": []
                }
              ]
            }
          ]
          
        }
      ]
    })

    // return this.http.post('test', {
    // 	"region" : region
    // })
    //return this.http.get<Array<any>>('../../assets/data/organisation.json');
  }

}
