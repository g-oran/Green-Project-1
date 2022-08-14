import { LightningElement } from 'lwc';

export default class T002 extends LightningElement {
    greeting = 'World';                            
   
        handlechange(event) {
            this.greeting = event.target.value;
        }
}