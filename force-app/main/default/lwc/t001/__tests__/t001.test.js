import { createElement } from 'lwc';
import T001 from 'c/t001';

describe('c-t001', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-t001', {
            is: T001
        });

        // Act
        document.body.appendChild(element);

       

        // Assert
        const div = element.shadowRoot.querySelector('lightning-button');


        expect(div.label).toBe("Test");
        expect(div.value).toBe("Test");
    });
});