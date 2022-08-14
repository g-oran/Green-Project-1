import { createElement } from 'lwc';
import Jest001 from 'c/jest001';

describe('c-jest001', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Testing Jest001', () => {
        // Arrange
        const element = createElement('c-jest001', {
            is: Jest001
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const div = element.shadowRoot.querySelector('div');
        const button = element.shadowRoot.querySelector('lightning-button');

        expect(div.textContent).toBe("Hello, World!");
        expect(button.label).toBe("Jest");
    });
});