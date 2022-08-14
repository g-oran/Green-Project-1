import { createElement } from 'lwc';
import Tz001 from 'c/tz001'
import { getRecords } from 'lightning/uiRecordApi'

//import getContactlists from '@salesforce/apex/ContactController.getContactLists';


const mockGetContactLists = require('./data/getContactLists.json')

describe('c-tz001', () => {

    beforeEach(()=>{
        const element = createElement('c-tz001',{
              is: Tz001
        })
        document.body.appendChild (element)
   })

   it("renders size", ()=>{
    const element = createElement('c-tz001',{
        is: Tz001
  })
  document.body.appendChild (element)

        getRecords.emit(mockGetContactLists)

        return Promise.resolve().then(() =>{

            const pElem = element.shadowRoot.querySelectorAll('p')
             expect(pElem.textContent).toBe("New Clarusway")
           //  expect(pElem[0].textContent).toBe(mockGetContactLists[0].Name);
        })
   })
});