import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/GetRecords.getAccounts';

export default class Z001 extends LightningElement {
    columns = [
        {label: 'Name', fieldName: 'Name'},
        {label: 'Id', fieldName: 'Id'}
    ];

    @wire(getAccounts) wiredAccounts;
}