(() => {

    function isRedFruit(fruit: string): boolean {
        return ['manzana', 'cereza', 'ciruela'].includes(fruit);
    }

    function getFruitsByColor(color: string): string[] {
        const fruits = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        if (!fruits[color]) {
            throw new Error('The color must be: red, yellow, purple');
        }

        return fruits[color];
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps(): string {
        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';

        return 'Working properly!';
    }

})();