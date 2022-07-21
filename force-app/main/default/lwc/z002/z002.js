import { LightningElement } from 'lwc';
import getAccountRecords from '@salesforce/apex/GetAccounts.getAccountRecords';

export default class Z002 extends LightningElement {

    accountList;
    showAccounts;

    clickHandleShow(){
        getAccountRecords()
        .then(result => {
            this.accountList = result;
            this.showAccounts = true;
    })
    }

    clickHandleHide(){
        this.showAccounts = false;
    }
}