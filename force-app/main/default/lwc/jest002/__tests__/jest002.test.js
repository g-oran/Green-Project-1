import { createElement } from 'lwc';
import Jest002 from 'c/jest002';

describe('c-jest002', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-jest002', {
            is: Jest002
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const paragraph = element.shadowRoot.querySelector('p');
        expect(paragraph.textContent).toBe("My name is Kenny");
    });
});