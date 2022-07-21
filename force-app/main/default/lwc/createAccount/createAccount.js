import { LightningElement } from 'lwc';
import acc_obj from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class CreateAccount extends LightningElement {
    accountObject = acc_obj;
    myFields = [NAME_FIELD, WEBSITE_FIELD];

}