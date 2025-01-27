import { createElement } from 'lwc';
import Jest005 from 'c/jest005';

describe('c-jest005', () => {
    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-jest005', {
            is: Jest005
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const lightningInput = element.shadowRoot.querySelector('lightning-input');
        lightningInput.value = "1990-01-01";
        
        lightningInput.dispatchEvent(new CustomEvent('change'));

        const text = element.shadowRoot.querySelector('p');

        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe("Your age is 32");
        })
    });
});