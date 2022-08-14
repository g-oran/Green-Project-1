import { createElement } from 'lwc';
import Calculator from 'c/calculator';

describe('Test for Calculator', () => {
    afterEach(() => {
        console.log("Test Completed!")
    });

    beforeEach(() => {
        console.log("Test Started!")
    });

    it('Test 1', () => {
        // Arrange
        const element = createElement('c-calculator', {
            is: Calculator
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });

    it('Test 2', () => {
        // Arrange
        const element = createElement('c-calculator', {
            is: Calculator
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(2).toBe(2);
    });
});