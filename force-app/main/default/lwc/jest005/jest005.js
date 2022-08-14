import { LightningElement } from 'lwc';

export default class Jest005 extends LightningElement {
    birthYear;
    age;

    handleChange(event){
        const today = new Date();
        const year = today.getFullYear(); 

        this.birthYear = event.target.value;
        this.age = year - parseInt(this.birthYear, 10);
    }
}
