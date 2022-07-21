import { LightningElement, api } from 'lwc';
export default class MyComponent extends LightningElement {

    @api objectApiName;
    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];
}