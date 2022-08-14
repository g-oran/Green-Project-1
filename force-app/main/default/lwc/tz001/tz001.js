import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/Tiger.getContactLists';

export default class Tz001 extends LightningElement {
    @wire(getContactList) contacts;

}